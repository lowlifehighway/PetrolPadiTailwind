const header = document.querySelector('header');
const headerActions = document.querySelector('#header-actions');
const menuButton = document.querySelector('.header-menu');
const menuIcon = document.querySelector('.header-menu img');
const nav = document.querySelector('header nav');
const navButton1 = nav.querySelector('a');
const overlay = document.querySelector('.overlay');
let menuClosed = true;
menuButton.addEventListener('click', () => {
  if (menuClosed) {
    nav.classList.remove('mobile:hidden');
    overlay.classList.remove('hidden');
    menuIcon.src = './images/CloseSquare-Bold-44px.svg';
    document.documentElement.style.overflow = 'hidden';
    menuClosed = false;
  } else {
    nav.classList.add('mobile:hidden');
    overlay.classList.add('hidden');
    menuIcon.src = './images/HambergerMenu-Bold-44px.svg';
    document.documentElement.style.overflow = '';
    menuClosed = true;
  }
});
navButton1.addEventListener('click', () => {
  nav.classList.add('mobile:hidden');
  overlay.classList.add('hidden');
  menuIcon.src = './images/HambergerMenu-Bold-44px.svg';
  document.documentElement.style.overflow = '';
  menuClosed = true;
});
headerActions.classList.add('hidden');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 80) {
    header.classList.add('sticky-header');
    headerActions.classList.add('flex');
    headerActions.classList.remove('hidden');
  } else {
    header.classList.remove('sticky-header');
    headerActions.classList.remove('flex');
    headerActions.classList.add('hidden');
  }
});
