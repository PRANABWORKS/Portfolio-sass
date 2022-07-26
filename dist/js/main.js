const navLeft = document.querySelector('.nav-left');
const nav = document.querySelector('.nav');
const navMiddle = document.querySelector('.nav-middle');
const hamburger = document.querySelector('.menu-nav_burger');




let showMenu = false;

navLeft.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
      nav.classList.add('show');
      navMiddle.classList.add('show');
      navLeft.classList.add('show');
      hamburger.classList.add('show');

      showMenu = true;

    } else {
        nav.classList.remove('show');
        navMiddle.classList.remove('show');
        navLeft.classList.remove('show');
        hamburger.classList.remove('show');
        
        showMenu = false;
    }
}