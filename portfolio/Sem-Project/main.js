import "./style.css";


ScrollReveal().reveal("section:not(:first-child) > * > *", {
   viewFactor: 0.2,
    easing: "ease-in",
    origin: "bottom",
    distance: "25px",
    duration: 500
})