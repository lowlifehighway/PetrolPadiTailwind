const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const accordionIcon = item.querySelector('.accordion-item svg');
  const content = item.querySelector('.accordion-item p');
  const accordionHeader = item.querySelector('.accordion-item h3');
  const accordion = function () {
    const isHidden = content.classList.contains('hidden');
    if (!isHidden) {
      // If the clicked item is already open, close it
      content.style.maxHeight = '0';
      setTimeout(() => {
        content.classList.add('hidden');
      }, 300);

      item.style.borderTop = '';
      accordionIcon.style.transform = 'rotate(-90deg)';
      accordionIcon.style.stroke = '#e0334c';
      accordionIcon.style.backgroundColor = '#fff';
    } else {
      // Close all other open items
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector('.accordion-item p');
        if (!otherContent.classList.contains('hidden')) {
          otherContent.style.maxHeight = '0';
          setTimeout(() => {
            otherContent.classList.add('hidden');
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
      content.classList.remove('hidden');
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
