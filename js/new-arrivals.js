const newArrivalsTable = document.querySelector('.new-arrivals__table');

const newArrivals = {
    101: {
        title: 'Analog Starter Kit',
        price: '$78',
        description: 'Preorder - Analog Starter Kit, Preorder - Analog Starter Kit, Preorder - Analog Starter Kit',
        image: './img/new-arrivals-1.png'
    },

    102: {
        title: 'Analog Cards',
        price: '$39',
        description: 'Preorder - Analog Cards, Preorder - Analog Cards, Preorder - Analog Cards',
        image: './img/new-arrivals-2.png'
    },

    103: {
        title: 'Analog Travel Case',
        price: '$32',
        description: 'Preorder - Analog Travel Case, Preorder - Analog Travel Case',
        image: './img/new-arrivals-3.png'
    },

    104: {
        title: 'Analog Wood Card Holder',
        price: '$59',
        description: 'Preorder - Analog Wood Card Holder, Preorder - Analog Wood Card Holder, Preorder - Analog Wood Card Holder',
        image: './img/new-arrivals-4.png'
    },

    105: {
        title: 'Modus Operandi - Artist Collab',
        price: '$126',
        description: 'Modus Operandi - Artist Collab, Modus Operandi - Artist Collab, Modus Operandi - Artist Collab',
        image: './img/new-arrivals-5.png'
    },

    106: {
        title: 'Modus Operandi 01 - Artist Collab',
        price: '$42',
        description: 'Modus Operandi - Artist Collab, Modus Operandi - Artist Collab, Modus Operandi - Artist Collab',
        image: './img/new-arrivals-6.png'
    },

    107: {
        title: 'Modus Operandi 02 - Artist Collab',
        price: '$42',
        description: 'Modus Operandi - Artist Collab, Modus Operandi - Artist Collab, Modus Operandi - Artist Collab',
        image: './img/new-arrivals-7.png'
    },

    108: {
        title: 'Modus Operandi 03 - Artist Collab',
        price: '$42',
        description: 'Modus Operandi - Artist Collab, Modus Operandi - Artist Collab',
        image: './img/new-arrivals-8.png'
    },
}

function createCardContent() {
    let content = `<div class="new-arrivals__item-pic-container">
    <img src="${this.image}" alt="" class='new-arrivals__item-pic'>
</div>
<div class="new-arrivals__item-info">
    <p class="new-arrivals__item-title">${this.title}</p>
    <p class="new-arrivals__item-price">${this.price}</p>
</div>`
    return content;
}

function createCard() {
    for (card in newArrivals) {
        let item = document.createElement('div');
        item.classList.add('new-arrivals__item');
        item.dataset.article = card;
        newArrivals[card].createCardContent = createCardContent;
        item.innerHTML = newArrivals[card].createCardContent();        
        newArrivalsTable.append(item);        
    }
}
createCard();