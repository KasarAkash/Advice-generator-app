let quoteId = document.querySelector("#id");
let quoteText = document.querySelector("#quoteText");
let btn = document.querySelector(".btn");

window.onload = fetchNewQuote;

function fetchNewQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (rawData) {
      return rawData.json();
    })
    .then((quoteObject) => quoteObject.slip)
    .then(function ({ id, advice }) {
      quoteId.textContent = id;
      quoteText.textContent = advice;
    });
}

btn.addEventListener("click", function () {
  fetchNewQuote();
});
