jQuery(function($){

var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

var slide = $('#slide'),
    prevSlide = $('#prev-slide'),
    images = [],
    width = slide.width(),
    height = slide.height();

for(var i = 0; i < 8; i++) {
    images.push({url: 'images/slideshow/' + i + '.jpg'});
}

function slideShow(images){
    var analysed = 0,
        i = 0;
    function next(){
        showSlide(images[i], next);
        i = (i+1)%images.length;
    }

    images = _.chain(images)
        .shuffle()
        .head(10)
        .each(function(i){
            i.img = new Image();
            i.img.onload = function(){
                var options = {width: width*0.1, height: height*0.1, ruleOfThirds: false};
                SmartCrop.crop(i.img, _.extend({maxScale: 0.8, minScale: 0.7}, options), function(from){
                    i.from = from;
                    if(++analysed==images.length*2) next();
                });
                SmartCrop.crop(i.img, _.extend({minScale: 1.0}, options), function(to){
                    i.to = to;
                    if(++analysed==images.length*2) next();
                });
            };
            i.img.src = i.url;
        })
        .value();
    //showSlide(images[i], function(){});
}

function showSlide(image, done){
    var img = image.img;
    function transform(crop){
        var s = width/crop.width,
            x = crop.x,
            y = crop.y,
            t = 'scale(' + s + ') translate(-' + x + 'px, -' + y + 'px)';
        return {
            '-webkit-transform': t,
            'transform': t,
            '-webkit-transform-origin': '0 0',
            'transform-origin': '0 0'
        };
    }

    // zooming out usually works better, but some change is good too
    if((image.from.topCrop.score.total+0.1)*1.002 > (image.to.topCrop.score.total+0.1)) {
        from = image.from;
        to = image.to;
    }
    else {
        from = image.to;
        to = image.from;
    }
    window.from = from;
    window.to = to;
    var last = $('img', slide);
    if(last[0]){
        prevSlide.empty().append(
            last.remove()
        );
        last.width();
        last.css('opacity', '0');
    }
    slide
        .empty()
        .append(img);
    $(img)
        .css(transform(from.topCrop))
        .css('opacity', 1)
        .width(); // reflow
    $(img)
        //.addClass('animate')
        .on(transitionend, _.once(done))
        .css(transform(to.topCrop));

    img.onerror = done;
    img.src = image.url;
}

slideShow(images);

});