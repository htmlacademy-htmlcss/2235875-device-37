// popover
const popover = document.querySelector('.popover');
const cartButton = document.querySelector('.count');

document.addEventListener('mouseup', (e) => {
  const click = e.composedPath().includes(popover);
  if (!click) {
    popover.classList.remove('popover-open');
  }

  cartButton.addEventListener('click', () => {
    popover.classList.toggle('popover-open');
  })
})

// modal
const deliveryBtn = document.querySelector('.delivery-btn');
const modalCloseButton = document.querySelector('.modal-content__close-btn');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');


deliveryBtn.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
})

modalCloseButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
})

modalContainer.addEventListener('mouseup', (e) => {
  const click = e.composedPath().includes(modal);
  if (!click) {
    modalContainer.classList.add('modal-container-close');
  }
})
