const inputbox = document.getElementById("input-box");
const listss = document.getElementById("list-container");
const btns = document.getElementById("btn");
btns.addEventListener("click", function () {
  if (inputbox.value === "") {
    alert("please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listss.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveli();
});
listss.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  } else if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
  saveli();
});

function saveli() {
  localStorage.setItem("data", listss.innerHTML);
}
function showli() {
  listss.innerHTML = localStorage.getItem("data");
}
showli();
