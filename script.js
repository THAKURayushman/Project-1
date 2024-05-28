const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let tabs = document.querySelector("#tabs");
let fixedImage = document.querySelector(".fixedImage");
tabs.addEventListener("mouseenter", () => {
  fixedImage.style.display = "block";
});

tabs.addEventListener("mouseleave", () => {
  fixedImage.style.display = "none";
});

let bar = document.querySelectorAll(".bar");
bar.forEach((t) => {
  t.addEventListener("mouseenter", () => {
    let img = t.getAttribute("dataImage");
    fixedImage.style.backgroundImage = `url(${img})`;
  });
});
