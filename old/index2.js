img = document.getElementById(proj1);
function enlarge() {
    img.style.width = "60%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}
function reset() {
    img.style.width = "40%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}