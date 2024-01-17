const form = document.querySelector(".form");
const modal = document.querySelector("[data-modal]");

const orderService = e => {
  e.preventDefault();

  Notiflix.Notify.success(
    "Thank you for using our services, we will contact you via e-mail or phone number",
    {
      position: "center-top",
      timeout: 8000,
      showOnlyTheLastOne: true,
    }
  );

  modal.classList.add("is-hidden");
  bodyScrollLock.enableBodyScroll(document.body);
  e.currentTarget.reset();
};

form.addEventListener("submit", orderService);
