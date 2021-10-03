const navSection = document.querySelector('.nav');
const newArrivalsSection = document.querySelector('.new-arrivals');
const finalStockSection = document.querySelector('.final-stock');
const clothingSection = document.querySelector('.clothing');
const objectsSection = document.querySelector('.objects');
const gatherSection = document.querySelector('.gather');
const aboutUsSection = document.querySelector('.design-studio');

const item = document.querySelector('.new-arrivals__item')
const navList = document.querySelector('.nav__list');
const modalWindow = document.querySelector('.modal-window');
const cartIcon = document.querySelector('.header__cart-icon-container');

const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');

/* nav scrolling*/

let addShadow = function () {
    let navCoords = navSection.getBoundingClientRect();
    if (navCoords.top == 0) {
        navSection.classList.add('nav__shadow');
    } else navSection.classList.remove('nav__shadow');
}

window.addEventListener('scroll', addShadow);

/* nav scrolling end*/


/*nav activating li*/

let scrollToSection = function() {

   for (let index in navList.children) {
         if (event.target==navList.children[index].firstChild) {
           
            let goalSection = document.getElementById(Number(index)+1);
            
        document.documentElement.scrollTop = goalSection.offsetTop - navSection.offsetHeight
           
       }
    }
  }

navSection.addEventListener('click', scrollToSection);

/* burger*/

let showDropDownMenu = function() {
    menu.classList.toggle('header__menu_show');
    document.querySelector('.header__burger-stripe').classList.toggle('header__burger-stripe_arrow');
    
    if ( menu.classList.contains('header__menu_show')) {
        document.body.classList.add('not-to-scroll')
    } else {
        document.body.classList.remove('not-to-scroll')
    }
}
burger.addEventListener('click', showDropDownMenu);

/*burger end*/