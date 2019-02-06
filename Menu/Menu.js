
const toggleMenu = () => {
  
  // Toggle the "menu--open" class on your menu refence. 
  this.classList.toggle('.menu-open');
}



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListerner('click', this.toggleMenu);