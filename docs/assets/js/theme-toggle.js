document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (!themeToggle || !themeIcon) {
    console.error("Theme toggle elements not found!");
    return;
  }

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
    localStorage.setItem("theme", theme);
  };

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

  // Set initial theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});