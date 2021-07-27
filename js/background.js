const images = ["0.jpeg", "1.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const src = `url('images/${chosenImage}')`;

document.querySelector("body").style.backgroundImage = src;
document.querySelector("body").style.backgroundSize = "cover";
document.querySelector("body").style.backgroundRepeat = "no-repeat";
document.querySelector("body").style.backgroundPosition = "center";
document.querySelector("body").style.height = "100vh";
