const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const backGround = document.createElement("img");
backGround.src="img/" + chosenImage;

// document.body.style.backgroundImage = backGround;
// document.body.style.backgroundSize = "cover";
document.body.appendChild(backGround);