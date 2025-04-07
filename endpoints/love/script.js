// Select the generate button
const generateButton = document.getElementById("hopecore-link");

// Paths to image folders
const regularImagePath = "assets/hc";
const specialImagePath = "assets/daily-reminder-that-you-will-have-this";

const resultContainer = document.getElementById("result");

const imageElement = document.createElement("img");
imageElement.src =
  "./assets/daily-reminder-that-you-will-have-this/IMG_1047.png"; // Need github API
imageElement.alt = "Generated Hopecore Image";
imageElement.style.maxWidth = "80%";

resultContainer.innerHTML = "";
resultContainer.appendChild(imageElement);

