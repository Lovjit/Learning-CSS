var caraousel = (function(){
    
    $(function(){
        bindCaraouselNextPreviousBtn();
        setInterval(showNextImage, 10000);
    }) // Onready
    
    var currentImg = $("#first-caraousel-img");
    
    function bindCaraouselNextPreviousBtn() {
        $( "#caraousel-prev-btn" ).click(showPrevImage);
        $( "#caraousel-next-btn" ).click(showNextImage);   
    }
    
    function showNextImage(){
        currentImg.attr('hidden','hidden')
        var previousImg = currentImg;
        currentImg = currentImg.next();
        if(currentImg.length > 0){
            currentImg.removeAttr('hidden')
        }else{
            currentImg = previousImg.siblings().first();
            currentImg.removeAttr('hidden')
        }   
    }
    
    function showPrevImage(){
        currentImg.attr('hidden','hidden');
        var previousImg = currentImg;
        currentImg = currentImg.prev();
        if(currentImg.length > 0){
            currentImg.removeAttr('hidden')
        }else{
            currentImg = previousImg.siblings().last()
            currentImg.removeAttr('hidden')
        }
    }
    
})();

// CSS Positioning(http://learnlayout.com/)
// Set timer and set interval timer
// Next previous on image

