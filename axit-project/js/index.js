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
let sliderCards =[
        document.getElementById('#review-card-one'),
        document.getElementById('#review-card-two'),
        documet.getElementById('#review-card-three')];

let i=0;

