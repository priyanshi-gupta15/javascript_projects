const form = document.querySelector("form");
// this usecase will give you empty value
//const height = parseInt(document.querySelector("#height").vaule);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heights = parseInt(document.querySelector("#height").value);
  const weights = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (heights === "" || heights < 0 || isNaN(heights)) {
    results.innerHTML = `please give a valid height ${heights}`;
  } else if (weights === "" || weights < 0 || isNaN(weights)) {
    results.innerHTML = `please give a valid weight ${weights}`;
  } else {
    const bmi = (weights / ((heights * heights) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
// const form = document.querySelector("form");
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");
//   if (height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
