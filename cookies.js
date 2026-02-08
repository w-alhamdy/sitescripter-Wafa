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
      link: "Privacy Policy",
      href: "privacy.html",
      allow: "Essential only"
    },
    onInitialise: function(status){
      var type = this.options.type;
      if(status == cookieconsent.status.allow){
        // load analytics or scripts here
      }
      if(status == cookieconsent.status.dismiss || status == cookieconsent.status.denied){
        // do nothing / block analytics
      }
    },
    onStatusChange: function(status, chosenBefore){
      // optional: run when user changes preferences
    }
  });
});
