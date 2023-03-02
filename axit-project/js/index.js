const sidebar = document.querySelector(".sidebar");
const rewSliderBtn1 = document.querySelector("#slaider-btn1");
const rewSliderBtn2 = document.querySelector("#slaider-btn2");
const rewSliderBtn3 = document.querySelector("#slaider-btn3");

const rewieSliderClick1 = () => {rewSliderBtn1.classList.toggle("")}
const rewieSliderClick2 = () => {rewSliderBtn2.classList.toggle("")}
const rewieSliderClick3 = () => {rewSliderBtn3.classList.toggle("")}

const onBurgerClick = () => {
    sidebar.classList.toggle("sidebar_active")
}


const tabOne = document.getElementById("tab-one");
const tabTwo = document.getElementById("tab-two");
const tabThree = document.getElementById("tab-thr");
// Хардкод))
function hidAS1(){
    tabOne.style.display="block";
    tabTwo.style.display="none";
    tabThree.style.display="none";
    scroll
}
function hidAS2(){
    tabOne.style.display="none";
    tabTwo.style.display="block";
    tabThree.style.display="none";
}
function hidAS3(){
    tabOne.style.display="none";
    tabTwo.style.display="none";
    tabThree.style.display="block";
}
 const cards = document.querySelectorAll('.reviews__mes-cards .wrapper__cards-rev .card__full');
 const sliderLine = document.querySelector('.reviews__mes-cards .wrapper__cards-rev');
 
 let count = 0;
 let width;

 function slyder(){
    if (document.documentElement.clientWidth < 880) {
    function init(){
        console.log('resize');
        width = document.querySelector('.reviews__mes-cards').offsetWidth;
        sliderLine.style.width = width * cards.length + 'px';
        cards.forEach(item => {
            item.style.width = width + 'px';
        });
        rollSlider()
    }
    init(); 

    document.querySelector('.slider-back-card').addEventListener('click', function (){
        count++;
        if (count >= cards.length) {
            count = 0;}
        rollSlider()
    });
    document.querySelector('.slider-center-card').addEventListener('click', function (){
        count = 1;
        rollSlider()
    });
    document.querySelector('.slider-next-card').addEventListener('click', function (){
        count--;
        if (count < 0) {
            count = cards.length - 1;
        }
        rollSlider()
    });

    function rollSlider(){
        sliderLine.style.transform = 'translate(-'+count*width+'px)';
    }
}
}
slyder();