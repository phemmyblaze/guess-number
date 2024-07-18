// document.querySelector(".check").addEventListener("click", function () {
// 	document.querySelector(".message").textContent = "My name is Phemmyblaze";
// 	document.querySelector(".message").style.fontSize = "50rem";
// 	console.log("Button clicked");
// });
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const resetButton = () => {
	score = 20;
	highscore = 0;
	document.querySelector(".message").textContent = "Start Guessing .....";
	number = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".number").textContent = "?";
	document.querySelector(".score").textContent = score;
	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#222";
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		document.querySelector(".message").textContent = "No number was inputted";
	} else if (guess === number) {
		document.querySelector(".message").textContent = "You guessed the correct number";
		document.querySelector(".number").textContent = number;
		document.querySelector("body").style.backgroundColor = " green";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guess > number) {
		if (score > 1) {
			document.querySelector(".message").textContent = "You guessed an higher number";
			//score --
			score = score - 1;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You lost the game";
			document.querySelector(".score").textContent = 0;
			resetButton;
		}
	} else if (guess < number) {
		if (score > 1) {
			document.querySelector(".message").textContent = "You guessed an lesser number";
			score = score - 1;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You lost the game";
			document.querySelector(".score").textContent = 0;
		}
	}
});

const pressAgain = document.querySelector(".again");

pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
pressAgain.addEventListener("click", resetButton);
