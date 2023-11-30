const slide = document.querySelectorAll(".img");
console.log(slide);
let count = 0;

slide.forEach((img, index) => {
  console.log(img, index);
  img.style.left = `${index * 100}%`;
});

function slideimg() {
  slide.forEach((img) => {
    console.log(img);
    img.style.transform = `translateX(${-count * 100}%)`;
  });
}

goPrew = () => {
  console.log("goPrew");
  slideimg();
  count--;
};
goNext = () => {
  console.log("goNext");
  slideimg();
  count++;
};
