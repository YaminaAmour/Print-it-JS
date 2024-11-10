const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const buttons = document.querySelectorAll(".arrow");
const left = document.getElementById("left");
const right = document.getElementById("right");
const slide = document.querySelectorAll(".slide");
const tagline = document.getElementById("tagline");


let currentIndex = 0

function nextSlide(){
	
const image = document.querySelector(".banner-img")
image.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
tagline.innerHTML = slides[currentIndex].tagLine;
}

left.addEventListener("click", (e) => {
	currentIndex--;
	if(currentIndex < 0){
		currentIndex = slides.length - 1;
	}
	nextSlide();
})

right.addEventListener("click", (e) => {
	currentIndex++;
	if(currentIndex >= slides.length){
		currentIndex = 0;
	}

	nextSlide();
})








// buttons.forEach((button) => {
// 	button.addEventListener("click", (e) => {
// 		const calcNextSlide = e.currentTarget.id === "left" ? -1 : 1;
// 		const slideActive = document.querySelector(".banner-img");

// 		newIndex = calcNextSlide +	[...slide].indexOf(slideActive);

// 		if (newIndex < 0) {
// 			newIndex = [...slide].length - 1;
// 		}else if (newIndex >= [...slide].length){
// newIndex = 0;
// 		}
// 		// slide[newIndex].classList.add("active");
// 		// slideActive.classList.remove("active");

// 		tagline.innerHTML = slides[newIndex].tagLine;
// 	});
// });