const logoImage = document.querySelector(".logoImage");
const logoP = document.querySelector(".logo-p");
const logoBorders = document.querySelector(".logo-borders");

const hoverHandler = (e) => {
  if (e.type === "mouseover") {
    logoP.style.fill = "tomato";
    logoBorders.style.fill = "tomato";
    logoBorders.classList.add("rotate-animation");
  } else {
    logoP.style.fill = "rgb(51,51,51)";
    logoBorders.style.fill = "rgb(51,51,51)";
    logoBorders.classList.remove("rotate-animation");
  }
};

logoImage.addEventListener("mouseover", hoverHandler);
logoImage.addEventListener("mouseout", hoverHandler);
