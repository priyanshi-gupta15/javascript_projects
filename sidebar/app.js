const close = document.querySelector(".close-btn");
const togglebtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
