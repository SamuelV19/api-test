async function createTask() {
    try {
        await apiRequest("/tasks", "POST", {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            status: document.getElementById("status").value
        });

        window.location.href = "tasks.html";

    } catch (error) {
        showError(error.message);
    }
}

function showError(message) {
    let errorDiv = document.getElementById("error");

    if (!errorDiv) {
        errorDiv = document.createElement("p");
        errorDiv.id = "error";
        errorDiv.className = "error";
        document.querySelector(".container").appendChild(errorDiv);
    }

    errorDiv.innerText = message;
}