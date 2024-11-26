const toggleMenuOpen = () => document.body.classList.toggle("open");

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const mainImage = document.getElementById("main-image");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      // Close all boxes
      boxes.forEach((b) => {
        if (b !== box) {
          b.classList.remove("box-expanded");
        }
      });

      // Toggle the clicked box
      box.classList.toggle("box-expanded");

      // Update the main image based on the clicked box
      const boxData = box.getAttribute("data-box");
      switch (boxData) {
        case "1":
          mainImage.src = "images/box1.jpg";
          break;
        case "2":
          mainImage.src = "images/box7.jpeg";
          break;
        case "3":
          mainImage.src = "images/box2.jpg";
          break;
        case "4":
          mainImage.src = "images/box4.jpg";
          break;
        case "5":
          mainImage.src = "images/box5.png";
          break;
        default:
          mainImage.src = "images/box2.avif";
          break;
      }
    });
  });
});
