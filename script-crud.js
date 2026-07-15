const btnAdcTask = document.querySelector(".app__button--add-task");
const formVisible = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [];

btnAdcTask.addEventListener("click", () => {
  formVisible.classList.toggle("hidden");
});

formVisible.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textarea.value,
  };
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
});
