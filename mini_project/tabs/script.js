const tabButtons = document.querySelectorAll(".tab-btn");
const contentBoxes = document.querySelectorAll(".content");
const image = document.querySelector(".about-img img");

// Map each tab ID to an image path
const imageMap = {
  history: "/global_images/hero.jpeg",
  vision: "/global_images/image3.png",
  goals: "/global_images/person-1.jpeg",
};

tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    // Update active button
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    // Update visible content
    contentBoxes.forEach((box) => box.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    // ✅ Change image based on tab
    if (imageMap[id]) {
      image.src = imageMap[id];
    }
  });
});
