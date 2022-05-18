const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progressStep = document.getElementById("progress");

let currentStep = 1;

nextButton.addEventListener("click", () => {
  if (currentStep >= circles.length) {
    currentStep = circles.length;
  } else {
    currentStep++;
  }

  updateDOM();
});

prevButton.addEventListener("click", () => {
  if (currentStep <= 1) {
    currentStep = 1;
  } else {
    currentStep--;
  }

  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, index) => {
    if (index >= 0 && index < currentStep) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  if (currentStep === 1) {
    prevButton.disabled = true;
  } else if (currentStep === circles.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }

  const activeSteps = document.querySelectorAll(".active");
  progressStep.style.width =
    ((activeSteps.length - 1) / (circles.length - 1)) * 100 + "%";
}
