// //const city;
// const apikey = "6d4b50b26f8a7ee472c08a762b887f64";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
// const weathericon = document.querySelector(".weathericon");
// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");
// async function checkweather(city) {
//   const response = await fetch(apiurl + city + `&appid=${apikey}`);
//   //   if (response.status == 404) {
//   //     document.querySelector(".error").style.display = "block";
//   //     document.querySelector(".weather").style.display = "none";
//   //   } else {
//   let data = await response.json();
//   console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML =
//     Math.random(data.main.temp) + "°c";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// }
// //     if (data.weather[0].main == "cloud") {
// //       weathericon.src = "/global_images/clouds.png";
// //     } else if (data.weather[0].main == "clear") {
// //       weathericon.src = "/global_images/clear.png";
// //     } else if (data.weather[0].main == "rain") {
// //       weathericon.src = "/global_images/rain.png";
// //     } else if (data.weather[0].main == "drizzle") {
// //       weathericon.src = "/global_images/drizzle.png";
// //     } else if (data.weather[0].main == "mist") {
// //       weathericon.src = "/global_images/mist.png";
// //     }
// //     document.querySelector(".weather").style.display = "block";
// //     document.querySelector(".error").style.display = "none";
// //   }
// //}

// searchbtn.addEventListener("click", () => {
//   checkweather(searchbox.Value);
// });

const apikey = "6d4b50b26f8a7ee472c08a762b887f64";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
console.log(apiurl);
const searchbox = document.querySelector("#searchbar");
const btn = document.querySelector("#btn");
const inputValue = () => {
  // Handle the input value change
  let userInput = searchbox.value;
  console.log("Input value changed to:", userInput);
  return userInput;
};
searchbox.addEventListener("input", inputValue);
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

btn.addEventListener("Click", () => checkweather(inputValue));
