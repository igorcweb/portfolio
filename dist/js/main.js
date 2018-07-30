const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const branding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of the menu
let showMenu = false;

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     branding.classList.add('show');
//     navItems.forEach(item => {
//       item.classList.add('show');
//     });

//     //Set Munu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     branding.classList.remove('show');
//     navItems.forEach(item => {
//       item.classList.remove('show');
//     });
//     //Set Munu State
//     showMenu = false;
//   }
// }
function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  branding.classList.toggle('show');
  navItems.forEach(item => {
    item.classList.toggle('show');
  });

  //Toglle Munu State
  showMenu = !showMenu;
}

menuBtn.addEventListener('click', toggleMenu);
