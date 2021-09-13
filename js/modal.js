
let showModalWindow = function(x) {
    modal = document.createElement('div');
    modal.classList.add('modal-window');
    let title = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-title').textContent;
    let price = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-price').textContent;
    document.body.appendChild(modal);
    let imageSrc = x.target.closest('.new-arrivals__item').
            querySelector('.new-arrivals__item-pic').src
            modal
            .innerHTML = 
            `<div class='modal__container'>
            <div class='modal__pic-container'>
            <img class='modal__pic' src='${imageSrc}' alt=''>
            </div>
            <div class='modal__info'>
            <h3 class='modal__title'>${title}</h3>
            <p class='modal__description'>Description</p>
            <p class='modal__price'>${price}</p>
            <input type='number' value = '1'>
            <button class='modal__add-to-basket'>Add to basket</button>
            </div>
            </div>`
    }
    
    newArrivalsTable.addEventListener('click', function() { showModalWindow(event)});
    //showModalWindow();
    
    window.addEventListener('click', () => {
    let modalWindow = document.querySelector('.modal-window');
    
    
        if (event.target==modalWindow) {modalWindow.remove()}
    })
    
    