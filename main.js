let genBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stoopBtn = document.querySelector("#stop");
let disV = document.querySelector(".text");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");
let interval;
let cont = document.querySelector(".theQuote");
let Id = document.querySelector(".theName");
let val = 1000;

let add = document.querySelector(".addBtn");

let arr = [
  {
    Quote:
      "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that",
    Name: "Stephen King",
  },
  {
    Quote:
      "Indeed, learning to write may be part of learning to read. For all I know, writing comes out of a superior devotion to reading.",
    Name: "Eudora Welty",
  },
  {
    Quote:
      "I kept always two books in my pocket: one to read, one to write in.",
    Name: "Robert Louis ",
  },
];

document.querySelector(".theQuote").addEventListener("focus", () => {
  clearInterval(interval);
  autoBtn.disabled = false;
});
document.querySelector(".theName").addEventListener("focus", () => {
  clearInterval(interval);
  autoBtn.disabled = false;
});

add.onclick = toAdd;
function toAdd() {
  let theQuote = document.querySelector(".theQuote").value;
  let theName = document.querySelector(".theName").value;
  if (theQuote !== "" && theName !== "") {
    let obj = {Quote: theQuote, Name: theName};
    arr.push(obj);
    document.querySelector(".theQuote").placeholder = "Add another one ?";
    document.querySelector(".theName").placeholder = "Add anoter ?";
  }
  document.querySelector(".theQuote").value = "";
  document.querySelector(".theName").value = "";
  return arr;
}

function genQuote() {
  let quotes = toAdd();
  const randomNum = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomNum];
  disV.innerHTML = quote.Quote;
  quoteId.innerHTML = quote.Name;
}
genBtn.onclick = genQuote;

function autoGen() {
  interval = setInterval(genQuote, val);
}
autoBtn.onclick = function () {
  autoBtn.disabled = true;
  autoGen();
};

stoopBtn.onclick = function () {
  clearInterval(interval);
  autoBtn.disabled = false;
};
