const emojiList = [
  "🤣",
  "😂",
  "😍",
  "😎",
  "🤩",
  "😡",
  "🥶",
  "🥳",
  "😱",
  "😴",
  "🤯",
  "😇",
  "👻",
  "💀",
  "🐱",
  "🐶",
  "🦄",
  "🍕",
  "🍔",
  "🚀",
];

const emojiDiv = document.getElementById("emoji");

// Change emoji on hover
emojiDiv.addEventListener("mouseover", () => {
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  emojiDiv.textContent = randomEmoji;
  emojiDiv.style.filter = "none";
  emojiDiv.style.transform = "scale(1.5)";
});

// Grayscale on mouse out
emojiDiv.addEventListener("mouseout", () => {
  emojiDiv.style.filter = "grayscale(100%)";
  emojiDiv.style.transform = "scale(1)";
});
