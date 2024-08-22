const inputBox = document.getElementById("input-box");
const lists = document.getElementById("list-container");
//we adding onclick element on the "add" button;
function addTask() {
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    lists.appendChild(li);
    //we adding span tag by creating it and then we add html in it
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    //for display the cross icon we have to append this in li
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}
lists.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
      //savework();
    }
  },
  false
);

// function savework() {
//   let ol = document.createElement("ol");
//   ol.innerHTML = lists.remove();
//   ol.appendChild(ol);
// }
function savedata() {
  localStorage.setItem("data", lists.innerHTML);
}
function showlist() {
  lists.innerHTML = localStorage.getItem("data");
}
showlist();
