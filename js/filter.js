window.onload = function(){
    slideMin();
    slideMax();
}

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const minGap = 0;
const range = document.querySelector(".slider-track");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.min);


function slideMin(){
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if(gap <= minGap){
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = minVal.value + " AZN" ;
    priceInputMin.value = minVal.value;
    setArea();
}


function slideMax(){
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if(gap <= minGap){
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = maxVal.value + " AZN";
    priceInputMax.value = maxVal.value;
    setArea();
}


function setArea(){
    range.style.left = (minVal.value  / sliderMaxValue) * 2 + "%"; 
    minTooltip.style.left = (minVal.value / sliderMaxValue) * 5 + "px";
    range.style.right = 100 - (maxVal.value / sliderMaxValue) * 1.2 + "%";

    if(maxVal.value < 400){
        maxTooltip.style.right =  (maxVal.value / sliderMaxValue) * 0.5 + "px";
    }else{
        maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 1 + "px";
    }

}


function setMinInput(){
    let minPrice = parseInt(priceInputMin.value);
    if(minPrice < sliderMinValue){
        priceInputMin.value = sliderMinValue;
    }
    minVal.value = priceInputMin.value;
    slideMin();
}


function setMaxInput(){
    let maxPrice = parseInt(priceInputMax.value);
    if(maxPrice < sliderMaxValue){
        priceInputMax.value = sliderMaxValue;
    }
    maxVal.value = priceInputMax.value;
    slideMax();
}



// Filter sidebar start

let boxes = document.querySelectorAll(".normSale");
boxes.forEach(b => b.addEventListener("change", tick));
function tick(e) {
    let state = e.target.checked; // save state of changed checkbox
    boxes.forEach(b => b.checked = false); // clear all checkboxes
    e.target.checked = state; // restore state of changed checkbox
}

let boxes2 = document.querySelectorAll(".saleDiscount");
boxes2.forEach(b => b.addEventListener("change", tick2));
function tick2(e) {
    let state = e.target.checked; // save state of changed checkbox
    boxes2.forEach(b => b.checked = false); // clear all checkboxes
    e.target.checked = state; // restore state of changed checkbox
}




document.querySelector('.clearAllCheckBoxes').addEventListener('click', () => {
    [...document.querySelectorAll('input[type="checkbox"]')].forEach(input => input.checked = false);
});



/* Filtersidebar overlay effect */

function resizeBody(){

    var w = document.documentElement.clientWidth || window.innerWidth;
    console.log(w, "Width");
    if (w <= 600) {
        console.log("Test11111");

        document.getElementsByClassName("filterbar")[0].classList.add('real-menu');
    } else {
        console.log("Test2222222");
        document.getElementsByClassName("filterbar")[0].classList.remove('real-menu');

    }

}


function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//Add event from js the keep the marup clean
function init() {
    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, "menu-open")) {
        addClass(ele, "menu-open");
    } else {
        removeClass(ele, "menu-open");
    }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});