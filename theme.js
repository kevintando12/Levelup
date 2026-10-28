const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("levelup-theme");
    const isLightMode = savedTheme === "light";

    function updateTheme(lightMode) {
        document.body.classList.toggle("light-mode", lightMode);
        themeToggle.setAttribute("aria-pressed", String(lightMode));
        themeToggle.textContent = lightMode ? "Donkere modus" : "Lichtmodus";
        themeToggle.setAttribute("aria-label", "Wissel tussen light en dark mode");
    }

    updateTheme(isLightMode);

    themeToggle.addEventListener("click", () => {
        const enableLightMode = !document.body.classList.contains("light-mode");
        localStorage.setItem("levelup-theme", enableLightMode ? "light" : "dark");
        updateTheme(enableLightMode);
    });
}
