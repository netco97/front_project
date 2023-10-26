    $(function(){
        let mySlider = $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1900,
          auto : true,
          autoDelay : 5000
        });

        loaded();
      });



const prev_url = "./img/prev_button.svg";
const next_url = "./img/forward-button-red-icon.svg";

/*
$(document).ready(function(){
    const prev = document.querySelector(".bx-prev");
    prev.style.background = `url(${prev_url})`;
})

$(document).ready(function(){
    const next = document.querySelector(".bx-next");
    next.style.background = `url(${next_url})`;
})*/
let opacity = 0;
let intervalID = 0;
function loaded(){
    const event_container = document.querySelector(".swiper-container");
    const prev = document.querySelector(".bx-prev");
    const next = document.querySelector(".bx-next");
    prev.style.display = 'block'
    prev.style.transition = 'all 0.2s ease-in' 
    next.style.display = 'block'
    next.style.transition = 'all 0.2s ease-in'
    
    prev.style.background = `url(${prev_url})`;
    next.style.background = `url(${next_url})`;
    console.log(prev);
    console.log(next);
    event_container.addEventListener("mouseenter", function(event){
        console.log('enterEvent')
        prev.style.left = '0px'
        next.style.right = '0px'
    });
    
    event_container.addEventListener("mouseleave", function(){
        console.log('leaveEvent')
        prev.style.left = '-40px'
        next.style.right = '-60px'
    });
}