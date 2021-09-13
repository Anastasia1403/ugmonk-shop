const sections = [newArrivalsSection,
    finalStockSection,
    clothingSection,
    objectsSection,
    gatherSection,
    aboutUsSection
];
const thr = [0.05, 0.8, 0.5, 0.7, 0.9, 0.9];

let activateSectionName = function (entries, observer) {

    entries.forEach(entry => {


        if (entry.isIntersecting) {

            navList.children[entry.target.id - 1].firstChild.classList.add('nav__link-item_active');
            if (navList.children[entry.target.id - 2]) {
                navList.children[entry.target.id - 2].firstChild.classList.remove('nav__link-item_active');
            };
            if (navList.children[entry.target.id]) {
                navList.children[entry.target.id].firstChild.classList.remove('nav__link-item_active');
            }
        } else {
            navList.children[entry.target.id - 1].firstChild.classList.remove('nav__link-item_active');

        }
    }
    )
}
for (let index = 0; index <= sections.length - 1; index++) {
    let observer =
        new IntersectionObserver(activateSectionName, { threshold: thr[index] });
     observer.observe(sections[index]);
}