    $(function(){
        let mySlider = $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1920,
          auto : true,
          autoDelay : 5000
        });
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

const event_container = document.querySelector(".swiper-container");
let opacity = 0;
let intervalID = 0;

event_container.addEventListener("mouseenter", function(event){
    
    intervalID = setInterval(show, 100);
});

event_container.addEventListener("mouseleave", function(){
    hide();
});

function show(){
    const prev = document.querySelector(".bx-prev");
    const next = document.querySelector(".bx-next");
    prev.style.display = 'block';
    prev.style.background = `url(${prev_url})`;
    next.style.display = 'block';
    next.style.background = `url(${next_url})`;

    
    
    console.log("show "+ opacity);

    if(opacity<=1){
        opacity = opacity+0.3;
        prev.style.opacity=opacity;
        next.style.opacity=opacity;
    }
    else {
        clearInterval(intervalID);
    }

}

function hide(){
    const prev = document.querySelector(".bx-prev");
    prev.style.display = 'none';
    const next = document.querySelector(".bx-next");
    next.style.display = 'none';
    
    opacity=0;
}