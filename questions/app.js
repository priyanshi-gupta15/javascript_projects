// //using selectors
// const question = document.querySelectorAll(".question");

// question.forEach(function (e) {
//   console.log(e);
// });

 // traversing a dom
 const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
