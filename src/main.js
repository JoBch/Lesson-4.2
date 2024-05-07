import bajsnisseURL from "./media/najsnisse.jpg"
import anime from "animejs";

const imgEl = document.querySelector("img");
imgEl.src = bajsnisseURL;

anime ({
    targets: imgEl,
    rotate: "360deg",
    direction: "alternate",
    loop: true
})