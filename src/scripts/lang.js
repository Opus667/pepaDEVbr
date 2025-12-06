export function getLang() {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="))
      ?.split("=")[1] || "pt"
  );
}

export function setLang(lang) {
  document.cookie = `lang=${lang}; path=/; max-age=31536000`;
  // Preferência: reload para evocar server-rendered content em novo idioma
  location.reload();
}

export function initLanguage() {
  const lang = getLang();
  // dispatch event to let client-side-only templates react
  window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}
