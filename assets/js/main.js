const form = document.querySelector("#contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const submitButton = form.querySelector("#submit-btn");
    const data = new FormData(event.target);

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute("data-animation");
            entry.target.classList.add(animationClass);
        } else {
            const animationClass = entry.target.getAttribute("data-animation");
            entry.target.classList.remove(animationClass);
        }
    });
});

const animateElements = document.querySelectorAll("[data-animation]");
animateElements.forEach((element) => {
    observer.observe(element);
});

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString("I build scalable backend systems, automate infrastructure, and develop AI-powered solutions.")
  .pauseFor(1000)
  .deleteChars(91) 
  .typeString(" optimize cloud infrastructure, and streamline DevOps workflows.")
  .pauseFor(1000)
  .deleteChars(63) 
  .typeString(" architect robust APIs, and engineer intelligent AI systems.")
  .pauseFor(1000)
  .deleteChars(60) 
  .typeString(" deploy containerized applications, and automate CI/CD pipelines.")
  .start();


