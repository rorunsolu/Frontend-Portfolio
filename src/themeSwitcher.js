let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enablelightmode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disablelightmode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

// if (lightmode === "active") enablelightmode();

if (lightmode !== "null" && lightmode !== null) {
  enablelightmode();
}

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enablelightmode() : disablelightmode();
});
