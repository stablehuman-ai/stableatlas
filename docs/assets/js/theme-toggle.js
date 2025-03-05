document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (!themeToggle) {
    console.error("Theme toggle button not found!");
    return;
  }

  // Load saved theme and update icon
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeIcon.textContent = currentTheme === "dark" ? "🌙" : "🌞";

  themeToggle.addEventListener("click", function () {
    let theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
  });
});
