const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Amination(){
    var elemC = document.querySelector("#elem-container");

var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",()=>{

    fixed.style.display = "block";

})
elemC.addEventListener("mouseleave",()=>{

    fixed.style.display = "none";

})
var elems=document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        var image = e.getAttribute("data-img");
        fixed.style.backgroundImage = `url(${image})`;
    })

})
}
function swiperAmination(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
function menu(){
    var menu = document.querySelector("nav h3");
var full = document.querySelector(".full-scr");
var navImg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click", ()=>{
    if(flag == 0){
        full.style.top = "0";
        navImg.style.opacity = 0
        flag = 1;
    }else{
        full.style.top = "-100";
        navImg.style.opacity = 1
        flag = 0;
        
    }
    
})

}
swiperAmination();
page3Amination();
menu();

var loader = document.querySelector("#loader")

setTimeout(()=>{
    loader.style.top = "-100%"
},4000)

