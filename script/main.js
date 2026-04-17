const themeToggleBtn = document.getElementById("themeToggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) {
      themeToggleBtn.textContent = "Light Mode";
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggleBtn) {
      themeToggleBtn.textContent = "Dark Mode";
    }
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (themeToggleBtn) {
    themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

applySavedTheme();