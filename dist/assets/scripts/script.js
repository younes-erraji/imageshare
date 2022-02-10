window.onload = function () {
  document.querySelector(".up").onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};
