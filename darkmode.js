let lightmode = localStorage.getItem("lightmode");
const themeSwitchEL = document.getElementById("theme-switch-el");

const enableLightmode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

if (lightmode === "active") {
  enableLightmode;
}

themeSwitchEL.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enableLightmode() : disableLightmode();
});
