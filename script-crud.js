const btnAdcTask = document.querySelector(".app__button--add-task");
const formVisible = document.querySelector(".app__form-add-task");

btnAdcTask.addEventListener("click", () => {
  formVisible.classList.toggle("hidden");
});
