const numberEl = document.getElementById("number");
const buttonEl = document.getElementById("btn-convert");
const lengthEl = document.getElementById("length-conversion-output");
const volumeEl = document.getElementById("volume-conversion-output");
const massEl = document.getElementById("mass-conversion-output");

buttonEl.addEventListener('click', function() {
  let userInput = getUserInput();
  lengthEl.textContent = `${userInput} meters = ${(userInput * 3.281).toFixed(3)} feet | ${userInput} feet = ${(userInput / 3.281).toFixed(3)} meters`;
  volumeEl.textContent  = `${userInput} liters = ${(userInput * 0.264).toFixed(3)} gallons | ${userInput} gallons = ${(userInput * 3.785).toFixed(3)} liters`;
  massEl.textContent = `${userInput} kilos = ${(userInput * 2.20462).toFixed(3)} pounds | ${userInput} pounds = ${(userInput / 2.20462).toFixed(3)} kilos`;
});


function getUserInput() {
  return numberEl.value;
}