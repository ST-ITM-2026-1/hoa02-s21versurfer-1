const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (selectedFilter === "all" || category === selectedFilter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});