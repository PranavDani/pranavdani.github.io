for (let i = 0; i < 4; i++) {
  document
    .getElementsByClassName("icon")[i].addEventListener("mouseover", () => {
      document.getElementsByClassName("hide")[i].style.opacity = 1;
    });
  document
    .getElementsByClassName("icon")[i].addEventListener("mouseleave", () => {
      document.getElementsByClassName("hide")[i].style.opacity = 0;
    });
}

for (let i = 0; i < 3; i++) {
  document.getElementsByClassName("email-link")[i].addEventListener("mouseover", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
    document.getElementsByClassName("cursor")[0].style.transition = "0.1s ease-out";
  });
  document
    .getElementsByClassName("email-link")[i]
    .addEventListener("mouseleave", () => {
      document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
      document.getElementsByClassName("cursor")[0].style.transition = "0s";
    });
}

// budget tracker hover
document.getElementsByClassName("medium")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
  document.getElementsByClassName("cursor")[0].style.transition = "0.1s ease-out";
});

document
  .getElementsByClassName("medium")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
    document.getElementsByClassName("cursor")[0].style.transition = "0s";
  });

// image
document.getElementsByClassName("image")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
  document.getElementsByClassName("cursor")[0].style.transition = "0.1s ease-out";
});

document
  .getElementsByClassName("image")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
    document.getElementsByClassName("cursor")[0].style.transition = "0s";
  });


for (let i = 0; i < 70; i++) {
  var tag = document.createElement("star");
  var text = document.createTextNode("");
  tag.appendChild(text);
  var element = document.getElementById("sky");
  element.appendChild(tag);
}