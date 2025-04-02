const modal = document.querySelector('.modal-container');
const showButton = document.querySelector('.button.button-search');
const closeButton = document.querySelector('.modal-close-button');


console.log('modal:', modal);
console.log('showButton:', showButton);
console.log('closeButton:', closeButton);

showButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Opening modal');
  modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  console.log('Closing modal');
  modal.style.display = 'none';
});
