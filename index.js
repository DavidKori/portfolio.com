//Vanilla js for PLP simple portfolio fuctionalities

//hide the menu log after clicking
 document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });
 
//logo clicking redirecting to external portfolio
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("click", function () {
      window.open("https://davidkori.github.io/portfolio.site/", "_blank");
    });
  }
});

// formspree submition form functionality 
//restrict formspree to open new page during submition
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  // Create status element
  const status = document.createElement("div");
  status.className = "form-status";
  form.parentNode.insertBefore(status, form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          showStatus("✅ Message sent successfully!", "success");
          form.reset();
        } else {
          return response.json().then(data => {
            throw new Error(data.error || "❌ Message failed to send.");
          });
        }
      })
      .catch(error => {
        showStatus(error.message, "error");
      });
  });

  function showStatus(message, type) {
    status.textContent = message;
    status.style.color = type === "success" ? "green" : "red";
    status.style.display = "block";

    setTimeout(() => {
      status.textContent = "";
      status.style.display = "none";
    }, 4000);
  }
});


