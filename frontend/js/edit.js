const id = localStorage.getItem("editId");

document.addEventListener("DOMContentLoaded", loadTask);

async function loadTask() {
    const task = await apiRequest("/tasks/" + id);

    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("status").value = task.status;
}

function goBack() {
    window.location.href = "tasks.html";
}

async function updateTask() {
    await apiRequest("/tasks/" + id, "PUT", {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value
    });

    window.location.href = "tasks.html";
}