window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#111",
        text: "#fff"
      },
      button: {
        background: "#00e5ff",
        text: "#000"
      }
    },
    theme: "classic",
    position: "bottom",
    content: {
      message: "This website uses cookies to improve your experience and analyse traffic.",
      dismiss: "Accept",
      link: "Privacy Policy",
      href: "privacy.html"
    }
  });
});
