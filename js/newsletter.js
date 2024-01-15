const newsletter = document.querySelector(".newsletter");

const handleSubmit = e => {
  e.preventDefault();

  Notiflix.Notify.success("Thank you for subscribing our newsletter 🎉", {
    position: "center-top",
    timeout: 5000,
    showOnlyTheLastOne: true,
  });

  e.currentTarget.reset();
};

newsletter.addEventListener("submit", handleSubmit);
