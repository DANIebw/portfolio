function setLanguage(lang) {
  // Cacher tous les éléments de langue
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.classList.remove("active");
  });

  // Afficher uniquement ceux de la langue choisie
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach((el) => {
    el.classList.add("active");
  });

  // Optionnel : enregistrer la langue dans localStorage
  localStorage.setItem("preferredLanguage", lang);
}

// Appliquer la langue au chargement
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "fr";
  setLanguage(savedLang);
});
