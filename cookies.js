const banner = document.getElementById("cookieBanner");

const acceptBtn = document.getElementById("acceptAll");
const essentialBtn = document.getElementById("essentialOnly");
const declineBtn = document.getElementById("declineAll");


// -----------------------------
// Analytics function (ONLY loads if accepted)
// -----------------------------
function enableAnalytics() {

  // Example: Google Analytics
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
  script.async = true;
  document.head.appendChild(script);

  console.log("Analytics enabled");
}


// -----------------------------
// Save user choice
// -----------------------------
function setConsent(type) {
  localStorage.setItem("cookieConsent", type);
  banner.style.display = "none";

  if (type === "all") {
    enableAnalytics();
  }
}


// -----------------------------
// On page load
// -----------------------------
const consent = localStorage.getItem("cookieConsent");

if (!consent) {
  banner.style.display = "flex";
} else {
  banner.style.display = "none";

  if (consent === "all") {
    enableAnalytics();
  }
}


// -----------------------------
// Button events
// -----------------------------
acceptBtn.onclick = () => setConsent("all");
essentialBtn.onclick = () => setConsent("essential");
declineBtn.onclick = () => setConsent("none");
