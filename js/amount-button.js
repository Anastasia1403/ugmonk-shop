let buttonAmount = document.querySelector('.button-amount__container');

let changeAmount = function(button) {
    if (button.target.classList.contains('button-amount__minus')) {
        if (button.target.closest('.cart__container')) {
                if(+button.target.closest('.cart__item').querySelector('.button-amount__input').value > 1) {
                    +button.target.closest('.cart__item').querySelector('.button-amount__input').value--;
                    let currentProductArticle = button.target.closest('.cart__item').dataset.article;
        
                    cart.forEach(item => {
                          if (item.article == currentProductArticle) {
                              item.amount--;
                              }        
                    }
                    )
                    countTotalCost();
                    showTotalCost();
                }
    } else if ( +document.querySelector('.button-amount__input').value > 1) {
        +document.querySelector('.button-amount__input').value--;
    }
}
    if (button.target.classList.contains('button-amount__plus')) {
        
        if (button.target.closest('.cart__container')) {
            +button.target.closest('.cart__item').querySelector('.button-amount__input').value++;
            let currentProductArticle = button.target.closest('.cart__item').dataset.article;

            cart.forEach(item => {
                  if (item.article == currentProductArticle) {
                      item.amount++;
                    }

            }
            )
            countTotalCost();
            showTotalCost();
        } else {
            +document.querySelector('.button-amount__input').value++;
        }

    }
    
    

}

document.addEventListener('click',() => changeAmount(event))