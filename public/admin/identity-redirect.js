(function () {
  // Se a URL tem invite_token na hash do root
  if (window.location.hash.includes("invite_token")) {
    const token = window.location.hash;
    // Redireciona para /admin preservando a hash inteira
    window.location.href = "/admin/" + token;
  }
})();
