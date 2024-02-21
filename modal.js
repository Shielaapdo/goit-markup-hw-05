js/modal.js

(() => {
  const refs = {
    openModalBtn: document.querySelector(".data-modal-open"),
    closeModalBtn: document.querySelector(".data-modal-close"),
    modal: document.querySelector(".data-modal-open"),
  

    /*additional code*/
    modal : document.querySelector(".modal"),
    btnonclick: function() {
    modal.style.display = "block";
  }
}

  /* imageSF.onclick = OpenModal()
  openModal.addEventListener ('onclick',() => {
    modal.showModal();
  }
  CloseModal.addEventListener ('onclick',() => {
    modalonclick.closemodal();
  }*/

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
  refs.modal.classList.toggle("is-hidden");;
    
  }
})();