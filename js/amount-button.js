let flag; //true if value > 1
function increaseInputValue(event) {
    event.target.previousElementSibling.value++;
}
function decreaseInputValue(event) {
    let currentValue = event.target.nextElementSibling.value;
   // debugger;
    if (currentValue > 1) {
        
        event.target.nextElementSibling.value--;
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}

function changeAmount(event) {
    if (event.target.closest('.button-amount__container')) {
       
        if (event.target.closest('.cart__container')) { //if is in cart
            let currentProductArticle = event.target.closest('.cart__item').dataset.article;
            if (event.target.classList.contains('button-amount__minus')) {
                decreaseInputValue(event);
                if(flag === true) {
                cart.forEach(item => {
                    if (item.article == currentProductArticle) {
                        item.amount--;
                    }
                }
                )
            }
            } else if (event.target.classList.contains('button-amount__plus')) {
                increaseInputValue(event);
                cart.forEach(item => {
                    if (item.article == currentProductArticle) {
                        item.amount++;
                    }
                }
                )
            }
                countTotalAmount();
                countTotalCost();
                replaceCartModalContent();
                replaceFooter();
                changeCartIcon();
                localStorage.cart = JSON.stringify(cart);
                localStorage.total = JSON.stringify(total);
            

            } else { //if is not in cart
                if (event.target.classList.contains('button-amount__minus')) {
                    decreaseInputValue(event);

                } else if (event.target.classList.contains('button-amount__plus')) {
                    increaseInputValue(event);
                }
            }
        
    }
}

document.addEventListener('click', () => changeAmount(event))