const button = document.querySelector('button');
const modal = document.querySelector('uc-modal');

modal.addEventListener('cancel', e => {
  console.log('cancel ...');
});

modal.addEventListener('confirm', e => {
  console.log('confirm ...');
});

button.addEventListener('click', () => {
  if (!modal.isOpen) {
    modal.open();
    console.log('Opening...');
  }
});
