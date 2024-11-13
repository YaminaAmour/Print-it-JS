const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const buttons = document.querySelectorAll(".arrow");
const left = document.getElementById("left");
const right = document.getElementById("right");
const tagline = document.getElementById("tagline");
const dotContainer = document.querySelector(".dots");


let currentIndex = 0
nextSlide()

slides.forEach((index) => {
	const newDiv = document.createElement("div");
	newDiv.classList.add("dot");
	if (index === currentIndex) {
		newDiv.classList.add("dot_selected");
	}
	dotContainer.appendChild(newDiv);
});


function changeDot() {
	const dot = document.querySelectorAll(".dot")
	dot.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	})

};


function nextSlide() {

	const image = document.querySelector(".banner-img")
	image.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	tagline.innerHTML = slides[currentIndex].tagLine;
}

left.addEventListener("click", (e) => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}

	changeDot();
	nextSlide();
})

right.addEventListener("click", (e) => {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	changeDot();
	nextSlide();
});
