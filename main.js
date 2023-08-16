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
