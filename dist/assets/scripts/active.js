document
  .querySelectorAll(".trendy .container > button")
  .forEach(function (block) {
    block.addEventListener("click", function () {
      if (!block.classList.contains("active")) {
        document
          .querySelectorAll(".trendy .container > button")
          .forEach(function (block) {
            block.classList.remove("active");
          });
        block.classList.add("active");
      }
    });
  });
