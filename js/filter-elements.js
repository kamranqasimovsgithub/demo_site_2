filterSelection("all");
function filterSelection(c) {
   var x, i;
   x = document.querySelectorAll(".filterElements");
   if (c == "all") c = "";
   Array.from(x).forEach(item => {
      removeActiveClass(item, "show-filter");
      if (item.className.indexOf(c) > -1) addActiveClass(item, "show-filter");
   });
}
function addActiveClass(ele, name) {
   var i, arr1, arr2;
   arr1 = ele.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
         ele.className += " " + arr2[i];
      }
   }
}
function removeActiveClass(ele, name) {
   var i, arr1, arr2;
   arr1 = ele.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
   }
   ele.className = arr1.join(" ");
}
var filterBtns = document.querySelector(".filterBtns");
var btns = filterBtns.getElementsByTagName("button");
console.log(btns.length, "BTNS")
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   });
  
}





// function handleChange(e) {
   
//    console.log(e.value, "test");
// }

// let minPrice;
// let maxPrice;

// function setMinInput(){
//    minPrice = parseInt(priceInputMin.value);  
//    console.log(minPrice,  "Qiymet deyismesi");
// }

// function setMaxInput(){
//    maxPrice = parseInt(priceInputMax.value);   
// }


// console.log(minPrice, maxPrice, "Qiymet deyismesi");




var price = document.getElementsByClassName("food-price");

function exportPrice(x, y){
   for(var i=0; i<price.length; i++){
      if( price[i].innerHTML>=  x &&  y>=price[i].innerHTML ){
         if(  price[i].parentElement.classList.contains('show-filter') == true){
            continue;
         }else{
            price[i].parentElement.classList.add("show-filter");
         }
        
      }else{
         price[i].parentElement.classList.remove("show-filter");
      }
      
   }
}



let  price1 = 25;
let  price2 = 75;


function addInputPrice(value){ 
   price1 = Number(value); 

   if(price1 !== undefined){
      showRangePrice(price1, price2);
   }else{
      var currprice = document.getElementsByClassName('min-val')[0].value;
      showRangePrice(Number(currprice), price2);

   }

}

function addInputPrice2(value){ 
   price2 = Number(value); 
   showRangePrice(price1, price2);
}


function showRangePrice(a1,a2){
   console.log(a1, a2, "Interval");
   exportPrice(price1,price2);
}


// //Discount sale

var discount = document.getElementsByClassName("filterElements");
console.log("discount", discount[i].firstElementChild);

function showfilterDiscount(){
   for(var i=0; i<discount.length; i++){
      
      if(discount[i].firstElementChild.classList.contains('discount')){
         if(  discount[i].classList.contains('show-filter')){
            continue;
         }else{
            discount[i].classList.remove("show-filter");
         }
      }else{
         discount[i].classList.remove("show-filter");
      }                
              
   }
}
  