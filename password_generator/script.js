let passwordbox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#$%^&*~_/";
const allchar = uppercase + lowercase + number + symbol;
function createpassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordbox.value = password;
}
