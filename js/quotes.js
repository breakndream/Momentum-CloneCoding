const quotes = [
    {
    quotes : "gkgk",
    author : "Sharon Kang"
},
    {
    quotes : "ddffdfdf",
    author : "meme Kang"
},
    {  
    quotes : "adfadf",
    author : "cool Kang"
},
    {
    quotes : "adfafafg",
    author : "moo Kang"

},
    {
    quotes : "qweqeq",
    author : "queen Kang"
},
    {
    quotes : "adfahj",
    author : "bee Kang"
},
    {
    quotes : "lk.hlkh",
    author : "merong Kang"
},
    {quotes : "gkwrtw4gk",
    author : "cute Kang"
},
    {
    quotes : "gkwrtjegreaffw4gk",
    author : "Sharon Kang"
},
    {
    quotes : "gkwrdsj;LKJ;Ldsjkjtw4gk",
    author : "Sharon Kang"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;