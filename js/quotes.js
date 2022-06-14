const quotes = [
    "Life is just a mirror, and what you see out there, you must first see inside of you.",
    "At the end of the day, we can endure much more than we think we can.",
    "Fight for the things that you care about, but do it in a way that will lead others to join you",
    "The most difficult thing is the decision to act. The rest is merely tenacity.",
    "Aging is not 'lost youth' but a new stage of opportunity and strength.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Realize that everything connects to everything else.",
    "Just one small positive thought in the morning can change your whole day.",
    "Everything is hard before it is easy.",
    "When one door closes another door opens.",
];

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote; 