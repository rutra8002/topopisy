  const toggleDarkModeBtn = document.querySelector("#toggle-dark-mode-btn");
  const body = document.querySelector("body");

  toggleDarkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleDarkModeBtn.innerHTML = "Light mode";
    } else {
      toggleDarkModeBtn.innerHTML = "Dark mode";
    }
  });
