var modal = "";  
var trigger = document.querySelectorAll(".trigger");
// var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.remove("show-modal");

    // alert(modal);
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);


trigger.forEach((btn)=>{    
  btn.addEventListener('click',addModal);  
});



function addModal(){
  let food=this; 
  let title=food.querySelector('.food-title').innerHTML; 
  let price=food.querySelector('.food-price').innerHTML; 
  let imgSrc=food.querySelector('.food-img').src; 
  console.log(imgSrc, "TST!@@!@");  
  // createCartModal(title, price, imgSrc);

  let newProductElement = createCartModal(title, price, imgSrc);
  // alert(newProductElement, "NewElement");
  let element = document.createElement('div');
  element.classList.add('popup-modal'); 
  element.classList.add("show-modal");
  element.innerHTML = newProductElement;
  console.log(element, "NewElement1212");
 
  

  document.getElementsByTagName('body')[0].append(element);
  document.getElementsByClassName('close-button')[0].onclick = function() {closeModal(element)};
  document.getElementsByClassName('cart-Adding')[0].onclick = function() {addCart(element)};
  loadPopup();
  

}

function createCartModal(title,price,imgSrc) {
  return `
   
    <div class="popup-modal-content food-box"> 
      <button type="button" class="close-button" onclick="closeModal(element)">x</button>     

      <div class="pic">
        <img src="${imgSrc}" class="food-img">
      </div>
      <div class="food-title">${title}</div>    
      <div class="food-price">${price}</div>       
      <button class="cart-Adding">Əlavə et</button>
    </div>  

    
  `
  ;
}



document.addEventListener('DOMContentLoaded', loadPopup);

function loadPopup() {
   loadContent2();
}

function loadContent2() { 
  modal = document.querySelector(".popup-modal");
  var closeButton = document.querySelector(".close-button");

  closeButton.addEventListener("click", toggleModal);     

}


function closeModal(element) { 
  console.log(element, "ELEMENT");
  element.remove();

}





const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');
btnCart.addEventListener('click', () => {
   cart.classList.add('cart-active');
});
btnClose.addEventListener('click', () => {
   cart.classList.remove('cart-active');
});
document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
   loadContent();
}

function loadContent() { 
    //Remove Food Items  From Cart  
    let btnRemove=document.querySelectorAll('.cart-remove');  
    btnRemove.forEach((btn)=>{    
        btn.addEventListener('click',removeItem);  
    });

    const btnMinus = document.querySelectorAll('.btn-minus');
    btnMinus.forEach((btn) => {
        btn.addEventListener('click', change_Quantity);
        console.log(btn);
    });

    const btnPlus = document.querySelectorAll('.btn-plus');
    btnPlus.forEach((btn2) => {
        btn2.addEventListener('click', change_Quantity2);
        console.log("QT@", btn2);
    });
    //Product Item Change Event  
    let qtyElements=document.querySelectorAll('.cart-quantity');  
    qtyElements.forEach((input)=>{    
        input.addEventListener('change',changeQty);  
    });
    //Product Cart    
    let cartBtns=document.querySelectorAll('.add-cart');  
    cartBtns.forEach((btn)=>{    
        btn.addEventListener('click',addCart);  
    });

   updateTotal();
}

function change_Quantity() { 
    if(isNaN(this.nextElementSibling.value) || this.nextElementSibling.value<=1){    
        this.nextElementSibling.value=2;   
    }  
    this.nextElementSibling.value = Number(this.nextElementSibling.value)-1;  
    console.log("INPUT",this.nextElementSibling.value)  // changeQty();  
    loadContent();}

   function change_Quantity2() { // if(isNaN(this.value) || this.value<1){  //   this.value=1;  // }  // alert(1);  
    this.previousElementSibling.value = Number(this.previousElementSibling.value)+1;  
    console.log("INPUT2222",this.previousElementSibling.value)  // changeQty();  
    loadContent();}

      //Remove Item
    function removeItem(){  
      if(confirm('Məhsul silinəcək')){    
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;    
        itemList=itemList.filter(el=>el.title!=title);    
        this.parentElement.remove();    
        loadContent();  
      }
    }
      //Change Quantity
    function changeQty(){  
        if(isNaN(this.value) || this.value<1){    
            this.value=1;  
        }
        loadContent();
   }
   // Minus and Plus 


   let itemList = [];
   //Add Cart
   function addCart(x){ 
    // if(x==11) alert("POOPPPPP");
        let food=x;
        console.log(food, "FOOD"); 
        let title=food.querySelector('.food-title').innerHTML; 
        let price=food.querySelector('.food-price').innerHTML; 
        let imgSrc=food.querySelector('.food-img').src; //console.log(title,price,imgSrc);  
        let newProduct={title,price,imgSrc};
        //Check Product already Exist in Cart 
        if(itemList.find((el)=>el.title==newProduct.title)){  
            // alert(newProduct.querySelector('.cart-quantity'));  
            // product.querySelector('.cart-quantity').value += 1;  
            // console.log(el);  
            document.querySelectorAll('.cart-box').forEach(product=>{    
            let qty=product.querySelector('.cart-quantity').value;    
            if(product.querySelector('.cart-food-title').innerHTML == newProduct.title){      
                product.querySelector('.cart-quantity').value = Number(product.querySelector('.cart-quantity').value) + 1;      
                product.querySelector('.cart-amt').innerHTML = Number(product.querySelector('.cart-price').innerHTML.replace("Rs.","")) * Number(product.querySelector('.cart-quantity').value);
            }
   
            updateTotal();
        });  
            return; 
        }else{  
            itemList.push(newProduct); 
        }

        let newProductElement = createCartProduct(title, price, imgSrc);
        let element = document.createElement('div');
        element.innerHTML = newProductElement;
        let cartBasket = document.querySelector('.cart-content');
        cartBasket.append(element);
        loadContent();
}

function createCartProduct(title, price, imgSrc) {
   return `  
   <div class="cart-box">  
        <img src="${imgSrc}" class="cart-img">  
        <div class="detail-box">    
            <div class="cart-food-title">${title}</div>    
                <div class="price-box">      
                <div class="cart-price">${price}</div>       
                <div class="cart-amt">${price}</div>   
            </div>
        <div class="cart-count-change">    
            <button type="button" class="btn-minus">-</button>    
            <input type="number" value="1" class="cart-quantity">    
            <button type="button" class="btn-plus">+</button>  
        </div>  
    </div>  
    <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>  `;
}

function updateTotal() {
   const cartItems = document.querySelectorAll('.cart-box');
   const totalValue = document.querySelector('.total-price');
   let total = 0;
   cartItems.forEach(product => {
      let priceElement = product.querySelector('.cart-price');
      let price = parseFloat(priceElement.innerHTML.replace("", ""));
      let qty = product.querySelector('.cart-quantity').value;
      total += (price * qty);
      product.querySelector('.cart-amt').innerText = (price * qty) + " AZN";
   });
   totalValue.innerHTML = total + ' AZN';

   // Add Product Count in Cart Icon
   const cartCount = document.querySelector('.cart-count');
   let count = itemList.length;
   cartCount.innerHTML = count;
   if (count == 0) {
      cartCount.style.display = 'none';
   } else {
      cartCount.style.display = 'block';
   }

}