window.addEventListener("load", function(){
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
    type: "opt-in",
    content: {
      message: "This website uses cookies to improve your experience and analyse traffic.",
      dismiss: "Accept all",
      deny: "Decline",
      allow: "Essential only",
      link: "Privacy Policy",
      href: "privacy.html"
    },
    onInitialise: function(status){
      if(status == cookieconsent.status.allow){
        console.log("All cookies accepted");
        // load analytics scripts here if you have any
      }
      if(status == cookieconsent.status.denied){
        console.log("Cookies declined");
        // block analytics scripts
      }
    },
    onStatusChange: function(status, chosenBefore){
      console.log("Cookie status changed:", status);
    }
  });
});
