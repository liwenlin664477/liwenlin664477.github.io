// Theme toggle (remembers choice; defaults to system preference)
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
syncIcon();

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncIcon();
});

function syncIcon() {
  toggle.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
