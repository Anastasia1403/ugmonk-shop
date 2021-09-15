document.querySelector('.header__cart-icon-container').dataset.amount = +0;
let totalCost;
const cart = [];

let countAmountProductsInCart = function () {
    let totalAmount = 0;
    for (product of cart) {
        totalAmount += product.amount;
    }
    document.querySelector('.header__cart-icon-container').dataset.amount = totalAmount;
};

let showTotalCost = function() {
    //debugger;
    document.querySelector('.cart__total-cost').textContent = `Total cost: $${totalCost}`
}

let countTotalCost = function() {
    totalCost = 0;
    cart.forEach(item => {
        for (product in newArrivals) {
            if (product == item.article) {
                totalCost += +newArrivals[product].price.substring(1)*item.amount;
                console.log(totalCost);
                break;
            }
        }
    }
    )
}


let addToCart = function (product) {
    if (product.target.classList.contains('modal__add-to-cart')) {
        let currentProduct = product.target.closest('.modal__container');
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
        countAmountProductsInCart();
    }
}

let showModalCart = function () {
    let modal = document.createElement('div');
    modal.classList.add('modal-window');
    document.body.appendChild(modal);
    modal.innerHTML =
        `<div class="cart__container">
            <h2 class="cart__title">Your cart</h2>
            <div class="cart__content">                
            </div>           
        </div>`;

    addProductToCart();    
   // debugger;
    if (!(cart.length == 0)) {
    countTotalCost();
    modal.querySelector('.cart__container').insertAdjacentHTML( 'beforeend', 
        `<div class="cart__footer">
        <div class="cart__total-cost">
        
        </div>
            <button class="cart__button cart__button-checkout">Checkout</button>
            <button class="cart__button cart__button-clear-cart">Clear cart</button>
        </div>`
        )
    showTotalCost();
    }
}

let addProductToCart = function () {
    const cartContent = document.querySelector('.cart__content');

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
                    console.log(currentItem);
                    break;
                }
            };
                                    
        cartNewItem.innerHTML = 
        `<div class="cart__item-img-container">
            <img src="${currentItem.image}" alt="" class="cart__item-img">
        </div>
        <div class="cart__item-info">
            <h3 class="cart__item-title">${currentItem.title}</h3>
            <div class="cart__item-cost">
                <div class='button-amount__container'>
                    <button class="button-amount__minus">-</button>
                    <input class="button-amount__input" type="text" value='${item.amount}'>
                    <button class="button-amount__plus">+</button>
                </div>
                <p class="cart__item-price">х ${currentItem.price}</p>
                </div>
        </div>`;        
    }
    )
    }
}



//delete product

//save to local storage


cartIcon.addEventListener('click', showModalCart)
document.addEventListener('click', (event) => addToCart(event))
