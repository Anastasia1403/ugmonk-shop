
let showModalWindow = function(x) {
let modal = document.createElement('div');
    modal.classList.add('modal-window');
    let modalArticle = x.target.closest('.new-arrivals__item').dataset.article
    let title = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-title').textContent;
    let price = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-price').textContent;
    document.body.appendChild(modal);
    let imageSrc = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-pic').src
            modal
            .innerHTML = 
            `<div class='modal__container' data-article = '${modalArticle}'>
            <div class='modal__pic-container'>
            <img class='modal__pic' src='${imageSrc}' alt=''>
            </div>
            <div class='modal__info'>
            <h3 class='modal__title'>${title}</h3>
            <p class='modal__description'>Description</p>
            <p class='modal__price'>${price}</p>
            <div class='button-amount__container'>
                <button class="button-amount__minus">-</button>
                <input class="button-amount__input" type="text" value='1'>
                <button class="button-amount__plus">+</button>
             </div>
            <button class='modal__add-to-cart'>Add to cart</button>
            </div>
            </div>`
    }

//     let modalWindow = {
//             show(),
//             close()
//     }
    
    newArrivalsTable.addEventListener('click', function() { showModalWindow(event)});
   
    
    window.addEventListener('click', () => {
    let modalWindow = document.querySelector('.modal-window');
        if (event.target==modalWindow) {modalWindow.remove()}
    })
    
    