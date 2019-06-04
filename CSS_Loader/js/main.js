const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    // 50是緩慢出現
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}
init();
