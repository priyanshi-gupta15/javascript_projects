const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intreval;
const startchangingColor = function () {
  if (!intreval) {
    intreval = setInterval(changeinterval, 1000);
  }

  function changeinterval() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangingColor = function () {
  clearInterval(intreval);
  intreval = null;
};

document.querySelector("#start").addEventListener("click", startchangingColor);

document.querySelector("#stop").addEventListener("click", stopchangingColor);
