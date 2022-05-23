var currentSlide = 1;

document.body.addEventListener("click", () => {
  console.log("clicked")
  console.log(currentSlide)
  document.querySelector(".s-" + currentSlide).classList.add("hidden")
  currentSlide = currentSlide + 1
  document.querySelector(".s-" + currentSlide).classList.remove("hidden")
})