let showModalWindow = function(event) {
        if (event.target.closest('.new-arrivals__item')) {
let modal = document.createElement('div');
    modal.classList.add('modal-window');
    let item = event.target.closest('.new-arrivals__item');
    let modalArticle = item.dataset.article
    let title = item.querySelector('.new-arrivals__item-title').textContent;
    let price = item.querySelector('.new-arrivals__item-price').textContent;
    document.body.appendChild(modal);
    let imageSrc = item.querySelector('.new-arrivals__item-pic').src
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
            <button class='button modal__add-to-cart-button'>Add to cart</button>
            </div>
            </div>`

            document.body.classList.add('not-to-scroll')
        }
    }

    newArrivalsTable.addEventListener('click', (event) => { showModalWindow(event)});
   
    
    window.addEventListener('click', (event) => {
    let modalWindow = document.querySelector('.modal-window');
        if (event.target==modalWindow || event.target.classList.contains('modal-close-button')) {
                modalWindow.remove();
                menu.classList.contains('header__menu_show') ? null : document.body.classList.remove('not-to-scroll')}
    })
    
    