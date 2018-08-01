(function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const branding = document.querySelector('.menu-branding');
  const navItems = document.querySelectorAll('.nav-item');

  //Set initial state of the menu
  let showMenu = false;

  function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    branding.classList.toggle('show');
    navItems.forEach(item => {
      item.classList.toggle('show');
    });

    //Toggle Munu State
    showMenu = !showMenu;
  }

  menuBtn.addEventListener('click', toggleMenu);

  const year = document.querySelector('#year');
  year.innerText = new Date().getFullYear();
})();
