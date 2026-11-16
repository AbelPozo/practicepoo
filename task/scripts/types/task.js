export class Task {
    constructor(text, category, completed) {
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    Render() {
        let card = document.createElement("div");
        card.classList.add("task-card");

        let taskText = document.createElement("p");
        taskText.textContent = this.text;

        let categoryText = document.createElement("p");
        categoryText.textContent = "Categoría: " + this.category;

        let button = document.createElement("button");
        button.textContent = "Completar";

        //Comprobamos si la tarea ya está completada
        if (this.completed) {
            taskText.classList.add("completed");
            button.textContent = "Completada";
            button.disabled = true;
        }

        //Marcamos la tarea como completada al pulsar el botón
        button.addEventListener("click", () => {
            this.completed = true;
            taskText.classList.add("completed");
            button.textContent = "Completada";
            button.disabled = true;
        });

        card.appendChild(taskText);
        card.appendChild(categoryText);
        card.appendChild(button);

        return card;
    }
}