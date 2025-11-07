// Langue par défaut au chargement
window.addEventListener("DOMContentLoaded", () => {
  setLanguage("fr");
  // Open portfolio panel when hero CTA or nav link clicked
  const openPanel = (e) => {
    e.preventDefault();
    const panel = document.getElementById("portfolio");
    if (!panel) return;
    panel.classList.add("open");
    panel.scrollIntoView({ behavior: "smooth" });
  };

  const btn = document.getElementById("btn-portfolio");
  const btnEn = document.getElementById("btn-portfolio-en");
  document.querySelectorAll('a[href="#portfolio"]').forEach((link) => {
    link.addEventListener("click", openPanel);
  });
  if (btn) btn.addEventListener("click", openPanel);
  if (btnEn) btnEn.addEventListener("click", openPanel);
  if (nav) nav.addEventListener("click", openPanel);

  // Go to exercices button(s)
  const goBtnFr = document.getElementById("goToExerciceButton");
  const goBtnEn = document.getElementById("goToExerciceButton-en");
  const target = document.getElementById("exercices");
  if (goBtnFr && target)
    goBtnFr.addEventListener("click", () =>
      target.scrollIntoView({ behavior: "smooth" })
    );
  if (goBtnEn && target)
    goBtnEn.addEventListener("click", () =>
      target.scrollIntoView({ behavior: "smooth" })
    );

  const backFr = document.getElementById("backToTop");
  const backEn = document.getElementById("backToTop-en");
  const hero = document.getElementById("hero");
  if (backFr && hero)
    backFr.addEventListener("click", (e) => {
      e.preventDefault();
      hero.scrollIntoView({ behavior: "smooth" });
    });
  if (backEn && hero)
    backEn.addEventListener("click", (e) => {
      e.preventDefault();
      hero.scrollIntoView({ behavior: "smooth" });
    });
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.dataset.lang === lang ? "block" : "none";
  });
  document.querySelectorAll(".language-switch button").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.textContent.toLowerCase().includes(lang)
    );
  });
}
