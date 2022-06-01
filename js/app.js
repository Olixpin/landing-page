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
const navList = [];

// Create Nav List
const createNavList = () => {
  sections.forEach((section) => {
    navList.push(section);
  });
};

createNavList();

const createList = () => {
  navList.forEach((item, index) => {
    let listElement = document.createElement("li");
    navListContainer.appendChild(listElement);
    listElement.innerHTML = `<a href=#section${
      index + 1
    } class="menu__link">Section ${index + 1}</a>`;
    console.log(item);
  });
};

createList();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const smoothScrolling = () => {
  const links = document.querySelectorAll("a");
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

const setActiveClass = () => {
  navList.forEach((section) => {
    let rect = section.getBoundingClientRect();

    if (rect.top < 0 || rect.top >= section.offsetheight) {
      section.classList.remove("your-active-class");
    } else {
      section.classList.add("your-active-class");
    }
  });
};

document.addEventListener(
  "scroll",
  () => {
    setActiveClass();
  },
  { passive: true }
);
