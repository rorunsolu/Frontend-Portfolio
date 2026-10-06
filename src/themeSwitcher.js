const themeSwitch = document.getElementById("theme-switch");
const darkModeClass = "darkmode";
const themeStorageKey = "lightmode";

const updateThemeSwitch = (darkModeEnabled) => {
  themeSwitch.setAttribute("aria-pressed", String(darkModeEnabled));
  themeSwitch.setAttribute(
    "aria-label",
    darkModeEnabled ? "Switch to light mode" : "Switch to dark mode",
  );
};

const darkModeEnabled = localStorage.getItem(themeStorageKey) === "active";
document.body.classList.toggle(darkModeClass, darkModeEnabled);
updateThemeSwitch(darkModeEnabled);

themeSwitch.addEventListener("click", () => {
  const enableDarkMode = !document.body.classList.contains(darkModeClass);
  document.body.classList.toggle(darkModeClass, enableDarkMode);
  updateThemeSwitch(enableDarkMode);

  if (enableDarkMode) {
    localStorage.setItem(themeStorageKey, "active");
  } else {
    localStorage.removeItem(themeStorageKey);
  }
});
