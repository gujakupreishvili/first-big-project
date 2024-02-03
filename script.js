const hamburger = document.querySelector(".hamburger");
const hoverDiv = document.querySelector(".hover-div");
let menOpen = false;
hamburger.addEventListener("click", () => {
  if (!menOpen) {
    hamburger.classList.add("open");
    hoverDiv.style.display = "block";
    menOpen = true;
  } else {
    hamburger.classList.remove("open");
    hoverDiv.style.display = "none";
    menOpen = false;
  }
});
