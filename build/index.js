const accordionItems = document.querySelectorAll('.accordion-item');
const heroSection = document.querySelector('#hero');
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
    nav.classList.remove('mobile:tw-hidden');
    overlay.classList.remove('tw-hidden');
    menuIcon.src = './images/CloseSquare-Bold-44px.svg';
    document.documentElement.style.overflow = 'hidden';
    menuClosed = false;
  } else {
    nav.classList.add('mobile:tw-hidden');
    overlay.classList.add('tw-hidden');
    menuIcon.src = './images/HambergerMenu-Bold-44px.svg';
    document.documentElement.style.overflow = '';
    menuClosed = true;
  }
});
navButton1.addEventListener('click', () => {
  nav.classList.add('mobile:tw-hidden');
  overlay.classList.add('tw-hidden');
  menuIcon.src = './images/HambergerMenu-Bold-44px.svg';
  document.documentElement.style.overflow = '';
  menuClosed = true;
});

accordionItems.forEach((item) => {
  const accordionIcon = item.querySelector('.accordion-item svg');
  const content = item.querySelector('.accordion-item p');
  const accordionHeader = item.querySelector('.accordion-item h3');
  const accordion = function () {
    const isHidden = content.classList.contains('tw-hidden');
    if (!isHidden) {
      // If the clicked item is already open, close it
      content.style.maxHeight = '0';
      setTimeout(() => {
        content.classList.add('tw-hidden');
      }, 300);

      item.style.borderTop = '';
      accordionIcon.style.transform = 'rotate(-90deg)';
      accordionIcon.style.stroke = '#e0334c';
      accordionIcon.style.backgroundColor = '#fff';
    } else {
      // Close all other open items
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector('.accordion-item p');
        if (!otherContent.classList.contains('tw-hidden')) {
          otherContent.style.maxHeight = '0';
          setTimeout(() => {
            otherContent.classList.add('tw-hidden');
          }, 300);

          // Reset text color when closed
          otherItem.style.borderTop = '';
          otherItem.querySelector('.accordion-item svg').style.transform =
            'rotate(-90deg)';
          otherItem.querySelector('.accordion-item svg').style.stroke =
            '#e0334c';
          otherItem.querySelector('.accordion-item svg').style.backgroundColor =
            '#fff';
        }
      });

      // Open the clicked item
      content.classList.remove('tw-hidden');
      content.style.maxHeight = content.scrollHeight + 'px'; // Optional, to differentiate active items
      item.style.borderTop = '4px solid #e0334c';
      accordionIcon.style.transform = 'rotate(0deg)';
      accordionIcon.style.stroke = '#fff';
      accordionIcon.style.backgroundColor = '#e0334c';
    }
  };
  // Add event listener to the whole header for better UX
  accordionHeader.addEventListener('click', accordion);
  accordionIcon.addEventListener('click', accordion);
});
headerActions.classList.add('tw-hidden');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 80) {
    header.classList.add('sticky-header');
    headerActions.classList.add('tw-flex');
    headerActions.classList.remove('tw-hidden');
  } else {
    header.classList.remove('sticky-header');
    headerActions.classList.remove('tw-flex');
    headerActions.classList.add('tw-hidden');
  }
});
