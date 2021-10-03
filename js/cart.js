document.querySelector('.header__cart-icon-container').dataset.amount = +0;

let cart;
(localStorage.cart == undefined) ? cart = [] : cart = JSON.parse(localStorage.cart);
let total;
(localStorage.total == undefined) ? total = {cost: 0, amount: 0} : total = JSON.parse(localStorage.total);

let modal = document.createElement('div');
modal.classList.add('modal-window');

let modalCart = document.createElement('div');
modalCart.classList.add('cart__container');
modal.appendChild(modalCart);

modalCart.innerHTML = `<h2 class="cart__title">Your cart</h2>
<button class=' modal-close-button cart__close'>×</button>`;

let cartContent = document.createElement('div');
cartContent.classList.add('cart__content');
modalCart.appendChild(cartContent);
cartContent.classList.add('cart__content_empty');
cartContent.textContent = 'Cart is empty';

let cartFooter = document.createElement('div');
cartFooter.classList.add('cart__footer');
modalCart.appendChild(cartFooter);

replaceCartModalContent();
replaceFooter();
changeCartIcon();

let addProductToCartArr = function(product) {
    let currentProduct = product.closest('.modal__container');
    let productArticle = currentProduct.dataset.article;
    let productAmount = +currentProduct.querySelector('.button-amount__input').value;
    let newProductInCart = cart.findIndex(item => item.article == productArticle);

    if (newProductInCart == -1) {
        cart.push({
            article: productArticle,
            amount: productAmount
        })
    } else {
        cart[newProductInCart].amount = cart[newProductInCart].amount + productAmount;
    }
}

function deleteFromCartArr(event) {
    
    if (event.target.classList.contains('cart__item-delete-button')) {
        let currentProduct = event.target.closest('.cart__item');
        let productArticle = currentProduct.dataset.article;
        let IndexOfProductInCart = cart.findIndex(item => item.article == productArticle);
        cart.splice(IndexOfProductInCart, 1);
        countTotalAmount();
        countTotalCost();
        replaceCartModalContent();
        replaceFooter();
        changeCartIcon();
        localStorage.cart = JSON.stringify(cart);
        localStorage.total = JSON.stringify(total);
    }
    }
   

function countTotalAmount() {
let totalAmount = 0;
for (product of cart) {
    totalAmount += product.amount;
}
total.amount = totalAmount;
}

function closeModalWindow() {
    document.querySelector('.modal-window').remove();
        document.body.classList.remove('not-to-scroll')
}

function showConfirmationWindow () {
    //debugger
    let modal = document.createElement('div');
    modal.classList.add('modal-window');
    let confirmation = document.createElement('div');
    confirmation.classList.add('confirmation');
    modal.appendChild(confirmation);
    confirmation.innerHTML = 
    `Product is added to your cart!
    <button class='button confirmation__button modal-close-button'> OK </button>`;
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.remove();
    }, 3000)
}

function countTotalCost() {
    totalCost = 0;
    cart.forEach(item => {
        for (product in newArrivals) {
            if (product == item.article) {
                totalCost += +newArrivals[product].price.substring(1)*item.amount;
                break;
            }
        }
    }
    )
    total.cost = totalCost;
    }

function replaceCartModalContent() {
    cartContent.innerHTML = '';
    cartContent.classList.remove('cart__content_empty')
    if (cart.length == 0) {
        cartContent.textContent = 'Cart is empty';
        cartContent.classList.add('cart__content_empty');
    } else {        
        cart.forEach(item => {
            let currentItem;
            let cartNewItem = document.createElement('div');
            cartNewItem.classList.add('cart__item');
            cartNewItem.dataset.article = item.article;
            cartContent.append(cartNewItem);
            for (product in newArrivals) {
                if (product == item.article) {
                    currentItem = newArrivals[product];
                    break;
                }
            };
                                    
        cartNewItem.innerHTML = 
        `<h3 class="cart__item-title">${currentItem.title}</h3>
       
        <div class="cart__item-info">
        <div class="cart__item-img-container">
            <img src="${currentItem.image}" alt="" class="cart__item-img">
        </div>
        <div>
            <div class="cart__item-cost">
                <div class='button-amount__container'>
                    <button class="button-amount__minus">-</button>
                    <input class="button-amount__input" type="text" value='${item.amount}'>
                    <button class="button-amount__plus">+</button>
                </div>
                <p class="cart__item-price">× ${currentItem.price}</p>
                </div>
            <button class=" button cart__item-delete-button">Delete from cart</button>
            </div>
        </div>`; 
    }
    )
    }
}

function replaceFooter() {
    cartFooter.remove();
    cartFooter.innerHTML = '';
    if (!(cart.length == 0)) {
        cartFooter.insertAdjacentHTML( 'beforeend', 
        `<div class="cart__total-cost">Total cost: $${total.cost}</div>
        <button class="button cart__button-checkout">Checkout</button>`
         ) 
    modalCart.appendChild(cartFooter);
    }
}

function changeCartIcon() {
    document.querySelector('.header__cart-icon-container').dataset.amount = total.amount;
}

function addToCart(event) {
    if (event.target.classList.contains('modal__add-to-cart-button')) {
        addProductToCartArr(event.target);
        countTotalAmount();
        countTotalCost();
        replaceCartModalContent();
        replaceFooter();
        changeCartIcon();
        localStorage.cart = JSON.stringify(cart);
        localStorage.total = JSON.stringify(total);
        closeModalWindow();
        showConfirmationWindow();
        
    }
}

function showModalCart() {
    document.body.appendChild(modal);
    document.body.classList.add('not-to-scroll')
}

cartIcon.addEventListener('click', showModalCart)
document.addEventListener('click', (event) => addToCart(event))
document.addEventListener('click', (event) => deleteFromCartArr(event))
// document.addEventListener('click', (event) => {
//     event.target.classList.contains('cart__close') ?
// })

