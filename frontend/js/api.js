const API_URL = "http://127.0.0.1:8000/api";

function getToken() {
    return localStorage.getItem("token");
}

async function apiRequest(endpoint, method = "GET", data = null) {

    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getToken()
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(API_URL + endpoint, options);

    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "index.html";
        return;
    }

    if (response.status === 204) {
        return;
    }
    
    const text = await response.text();

    let result;
    try {
        result = text ? JSON.parse(text) : {};
    } catch {
        throw new Error("Invalid server response.");
    }

    if (!response.ok) {

        if (response.status === 422 && result.errors) {
            const messages = Object.values(result.errors)
                .flat()
                .join(" ");
            throw new Error(messages);
        }

        throw new Error(result.message || "Request failed.");
    }

    return result;
}