import { Task } from "./types/task.js";

//Buscamos el contenedor donde mostraremos las tareas
let taskList = document.getElementById("task-list");

//Cargamos las tareas del archivo JSON
fetch("./data/tasks.json")
    .then(response => response.json())
    .then(data => {

        //Creamos un objeto Task para cada tarea
        data.forEach(taskData => {
            let task = new Task(
                taskData.text,
                taskData.category,
                taskData.completed
            );

            //Añadimos la tarea a la página
            taskList.appendChild(task.Render());
        });

    });