const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const container = document.querySelector(".container");
const listItems = document.querySelectorAll("li");

function main() {
  let navMargin = 0;
  let navTranslateX = 100;

  listItems.forEach((element) => {
    element.style.marginLeft = navMargin + "px";
    element.style.transform = `translateX(-${navTranslateX + "%"})`;
    navMargin += 32;
    navTranslateX += 50;
  });

  openButton.addEventListener("click", () => {
    container.classList.add("show-nav");
    listItems.forEach((element) => {
      element.style.transform = "translateX(0)";
    });
  });

  closeButton.addEventListener("click", () => {
    container.classList.remove("show-nav");

    navTranslateX = 100;
    listItems.forEach((element) => {
      element.style.transform = `translateX(-${navTranslateX + "%"})`;
      navTranslateX += 50;
    });
  });
}

main();
