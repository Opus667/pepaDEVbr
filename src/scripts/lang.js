export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

export function initLanguage() {
  const lang = localStorage.getItem("lang") || "pt";
  window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}
