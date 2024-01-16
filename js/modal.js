const serviceModal = document.querySelector("[data-modal]");
const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");

const closeModalByKey = e => {
  if (e.code === "Escape") {
    serviceModal.classList.add("is-hidden");
    bodyScrollLock.enableBodyScroll(document.body);
    document.removeEventListener("keydown", closeModalByKey);
  }
};

const openModal = () => {
  serviceModal.classList.remove("is-hidden");
  bodyScrollLock.disableBodyScroll(document.body);
  document.addEventListener("keydown", closeModalByKey);
};

const closeModal = () => {
  serviceModal.classList.add("is-hidden");
  bodyScrollLock.enableBodyScroll(document.body);
  document.removeEventListener("keydown", closeModalByKey);
};

const closeModalByBackdrop = e => {
  if (e.currentTarget === e.target) {
    serviceModal.classList.add("is-hidden");
    bodyScrollLock.enableBodyScroll(document.body);
    document.removeEventListener("keydown", closeModalByKey);
  }
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
serviceModal.addEventListener("click", closeModalByBackdrop);
