document.addEventListener("DOMContentLoaded", loadTasks);

function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}

function goToCreate() {
    window.location.href = "create.html";
}

async function loadTasks() {
    try {
        const tasks = await apiRequest("/tasks");

        const container = document.getElementById("tasks");
        container.innerHTML = "";

        tasks.forEach(task => {
            container.innerHTML += `
                <div class="task">
                    <b>${task.title}</b><br>
                    ${task.description}<br>
                    Status: ${task.status}<br>
                    <button class="btn-secondary" onclick="editTask(${task.id})">Update</button>
                    <button class="btn-danger" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
        });

    } catch (error) {
        alert(error.message);
    }
}

function editTask(id) {
    localStorage.setItem("editId", id);
    window.location.href = "edit.html";
}

async function deleteTask(id) {
    await apiRequest("/tasks/" + id, "DELETE");
    loadTasks();
}