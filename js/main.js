let main = document.querySelector("main");
let ratingSection = document.querySelector(".rating-container");
let thanksSection = document.querySelector(".thanks-container");
let addBtn = document.querySelector(".add-btn");
let rate = document.querySelectorAll(".to-select");
let eleToWriteRate = document.querySelector(".your-rate span");

rate.forEach((ele) => {
  ele.addEventListener("click", (eve) => {
    rate.forEach((ele) => {
      ele.classList.remove("select");
    });
    eve.target.classList.add("select");
    eleToWriteRate.innerHTML = `${eve.target.innerHTML} out of 5`;
  });
});

addBtn.addEventListener("click", () => {
  let submit = false;
  rate.forEach((ele) => {
    if (ele.classList.contains("select")) {
      submit = true;
    }
  });
  if (submit === true) {
    ratingSection.classList.remove("show");
    ratingSection.classList.add("hidden");
    thanksSection.classList.remove("hidden");
    thanksSection.classList.add("show");
  }
});

main.addEventListener("click", (eve) => {
  if (
    eve.target === main &&
    ratingSection.classList.contains("hidden") &&
    thanksSection.classList.contains("show")
  ) {
    thanksSection.classList.remove("show");
    thanksSection.classList.add("hidden");
    ratingSection.classList.remove("hidden");
    ratingSection.classList.add("show");
  }
});
