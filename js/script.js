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


/* nav scrolling*/


let addShadow = function () {
    let navCoords = navSection.getBoundingClientRect();
    if (navCoords.top == 0) {
        navSection.classList.add('nav__shadow');
    } else navSection.classList.remove('nav__shadow');
}

window.addEventListener('scroll', addShadow);

/* nav scrolling end*/


/*nav activating li start*/

let scrollToSection = function() {

   for (let index in navList.children) {
         if (event.target==navList.children[index].firstChild) {
           
            let goalSection = document.getElementById(Number(index)+1);
            
        document.documentElement.scrollTop = goalSection.offsetTop - navSection.offsetHeight
       
    
       }
    }
  
}

navSection.addEventListener('click', scrollToSection);

/*

let analog = document.querySelector('.header__analog-img');

let slider = function() {
    analog.src = 'img/analog-2.png';
    setTimeout(() => {analog.src = 'img/gather.png'}, 5000)
    setTimeout(() => {analog.src = 'img/analog-1.png'}, 10000)

}
setInterval(slider, 5000);

console.log(analog.src)

*/


/* burger*/
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');

let showDropDownMenu = function() {
    menu.classList.toggle('header__menu_show')
}
burger.addEventListener('click', showDropDownMenu);

/*burger end*/

/* show modal window */













/* nav scrolling



let lastScrollPosition = 0;
let scroll; // 1 if scroll down, 0 if scroll up

window.addEventListener('scroll', trackScrollDirection = function () {

    let currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
        lastScrollPosition = currentScrollPosition;
        return scroll = 1; //down
    } else if (currentScrollPosition < lastScrollPosition) {
        lastScrollPosition = currentScrollPosition;
        return scroll = 0; //up
    }
    return
}
);

let stickyNav = function () {
    if (scroll == 0) {
        navSection.classList.remove('nav__sticky');
                
    } else if (scroll == 1) {
        navSection.classList.add('nav__sticky');
      }
}

let addShadow = function () {
    let navCoords = navSection.getBoundingClientRect();
    if (navCoords.top == 0) {
        navSection.classList.add('nav__shadow');
    } else navSection.classList.remove('nav__shadow');
}

window.addEventListener('scroll', stickyNav);
window.addEventListener('scroll', addShadow);


 nav scrolling end*/