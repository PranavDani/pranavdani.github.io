// var i = 0;
// for (i = 0; i < 2; i++) {
//   document
//     .getElementsByClassName("icon")
//     [i].addEventListener("mouseover", () => {
//       document.getElementsByClassName("hide")[i].style.opacity = 1;
//     });
//   document
//     .getElementsByClassName("icon")
//     [i].addEventListener("mouseleave", () => {
//       document.getElementsByClassName("hide")[i].style.opacity = 0;
//     });
//   console.log(i);
// }
// console.log(document.getElementsByClassName("icon"));
// console.log(document.getElementsByClassName("hide"));

// Weird issue

document.getElementsByClassName("icon")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("hide")[0].style.opacity = 1;
});
document.getElementsByClassName("icon")[1].addEventListener("mouseover", () => {
  document.getElementsByClassName("hide")[1].style.opacity = 1;
});
document.getElementsByClassName("icon")[2].addEventListener("mouseover", () => {
  document.getElementsByClassName("hide")[2].style.opacity = 1;
});
document.getElementsByClassName("icon")[3].addEventListener("mouseover", () => {
  document.getElementsByClassName("hide")[3].style.opacity = 1;
});
// document.getElementsByClassName("icon")[4].addEventListener("mouseover", () => {
//   document.getElementsByClassName("hide")[4].style.opacity = 1;
// });

document
  .getElementsByClassName("icon")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("hide")[0].style.opacity = 0;
  });
document
  .getElementsByClassName("icon")[1]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("hide")[1].style.opacity = 0;
  });

document
  .getElementsByClassName("icon")[2]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("hide")[2].style.opacity = 0;
  });

document
  .getElementsByClassName("icon")[3]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("hide")[3].style.opacity = 0;
  });
// document
//   .getElementsByClassName("icon")[4]
//   .addEventListener("mouseleave", () => {
//     document.getElementsByClassName("hide")[4].style.opacity = 0;
//   });


document.getElementsByClassName("email-link")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
});
document.getElementsByClassName("email-link")[1].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
});
document.getElementsByClassName("email-link")[2].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
});

document
  .getElementsByClassName("email-link")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
  });

document
  .getElementsByClassName("email-link")[1]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
  });
document
  .getElementsByClassName("email-link")[2]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
  });

// budget tracker hover
document.getElementsByClassName("medium")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
});

document
  .getElementsByClassName("medium")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
  });

// image
document.getElementsByClassName("image")[0].addEventListener("mouseover", () => {
  document.getElementsByClassName("cursor")[0].style.transform = "scale(3)";
});

document
  .getElementsByClassName("image")[0]
  .addEventListener("mouseleave", () => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(-50%, -50%)";
  });