AOS.init();

const form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const submitButton = form.querySelector("#submit-btn");
    const data = new FormData(event.target);
    console.log(data);
    console.log(event.target.action);

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                Toastify({
                    text: "Thank you for your message!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "#4CAF50",
                    },
                }).showToast();
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        Toastify({
                            text: "Oops! There was a problem submitting your form",
                            duration: 3000,
                            gravity: "top",
                            position: "right",
                            style: {
                                background: "#F44336",
                            },
                        }).showToast();
                    }
                });
            }
        })
        .catch((error) => {
            Toastify({
                text: "Oops! There was a problem submitting your form",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#F44336",
                },
            }).showToast();
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        });
}

form.addEventListener("submit", handleSubmit);
