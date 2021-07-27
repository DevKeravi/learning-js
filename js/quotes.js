const quotes = [
  {
    quote: "Que Sera Sera",
    comment: "되지 않을 것에 미련을 두지말자",
  },
  {
    quote: "Carpediem",
    comment: "미래는 알 수 없으니 현재를 즐기자",
  },
  {
    quote: "Per aspera ad asta",
    comment: "역경을 넘어서 저 너머 별까지",
  },
  {
    quote: "산호침상양행루 반시사군반한군",
    comment: "님을 한 하면서도, 그리워 할 수 밖에 없는것",
  },
];

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
const quote = document.querySelector("#quote div:first-child");
const comment = document.querySelector("#quote div:last-child");

quote.innerText = todaysQuote.quote;
comment.innerText = todaysQuote.comment;
