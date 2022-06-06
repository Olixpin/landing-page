/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const sections = document.querySelectorAll("section");
const navListContainer = document.querySelector("#navbar__list");

const createList = () => {
  sections.forEach((item, index) => {
    let listElement = document.createElement("li");
    navListContainer.appendChild(listElement);
    listElement.innerHTML = `<a href=#section${
      index + 1
    } class="menu__link">Section ${index + 1}</a>`;
  });
};

createList();

// Add class 'active' to section when near top of viewport

let links = document.querySelectorAll("a");
console.log(links);

window.addEventListener("scroll", (e) => {
  sections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();
    if (rect.top > 0 && rect.top < section.offsetHeight - 200) {
      section.classList.add("your-active-class");
      links[index].classList.add("active__link");
    } else {
      section.classList.remove("your-active-class");
      links[index].classList.remove("active__link");
    }
    console.log(section);
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const smoothScrolling = () => {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
  });
};

smoothScrolling();

// Set sections as active
