function hideModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
  }
  
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  
  modal.addEventListener('click', hideModal);
  modalContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  