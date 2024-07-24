let tasks = [];

const form = document.querySelector(".form");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const renderTask = () => {
    taskList.innerHTML = "";
        tasks.forEach(task => { 
            const html = `
                <li data-id="${task.id}" class="tasks_item">
                    <p class="${task.complete && "done"}">${task.title}</p>
                    <div>
                        <i class="bx bx-check"></i>
                        <i class="bx bx-trash"></i>
                    </div>
                </li>
            `;

            const li = document.createElement("li");
            // li.addEventListener("click", () => {});

            taskList.innerHTML += html;
        });
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    title = taskInput.value.trim();

    if (title.length >= 3) {
        // console.log(title);
        const task = {
            id: Date.now(),
            title, // Es lo mismo que poner title: title,
            complete: false,
        };
        tasks.push(task);

        // console.log(task, tasks);

        taskInput.value = "";

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTask();
    } else {
        // alert("La tarea tiene que tener como mínimo 3 caracteres.") // Otra opción.

        const error = document.querySelector(".error");
        error.textContent = "La tarea tiene que tener como mínimo 3 caracteres (no incluye espacios)."

        setTimeout(() => { // Indica un tiempo para realizar otra acción, en este caso, borrar el mensaje de error.
            error.textContent = "";
        }, 2000);
    };

    // console.log(event);
});

// const bxCheck = document.querySelector(".bx-check");

// bxCheck.addEventListener("click", () => {
//     console.log("Click en bx-check");
// })

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("bx-check")) {
        console.log(tasks);
        const id = event.target.closest("li").dataset.id;
        // console.log(event.target.closest("li"));
        console.log(id);

        const task = tasks.find(task => task.id == id);
        task.complete = !task.complete;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        // renderTask(); // Si es mucho contenido, va a tardar más que el toggle.

        event.target.closest("li").querySelector("p").classList.toggle("done"); // Mejor técnica que el render.
        // const html = ` // El evento toggle se basa en esta const para buscar.
        //         <li data-id="${task.id}" class="tasks_item">
        //             <p class="${task.complete && "done"}">${task.title}</p>
        //             <div>
        //                 <i class="bx bx-check"></i>
        //                 <i class="bx bx-trash"></i>
        //             </div>
        //         </li>
        //     `;
    };

    if (event.target.classList.contains("bx-trash")) {
        const id = event.target.closest("li").dataset.id;
        const taskIndex = tasks.findIndex((task) => task.id == id);

        tasks.splice(taskIndex, 1);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        event.target.closest("li").remove();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    renderTask();
});