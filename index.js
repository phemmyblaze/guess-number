// document.querySelector(".check").addEventListener("click", function () {
// 	document.querySelector(".message").textContent = "My name is Phemmyblaze";
// 	document.querySelector(".message").style.fontSize = "50rem";
// 	console.log("Button clicked");
// });
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".h1").style.backgroundColor = "#fff";

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		document.querySelector(".message").textContent = "No number was inputted";
	} else if (guess === number) {
		document.querySelector(".message").textContent = "You guessed the correct number";
		document.querySelector(".number").textContent = number;
		document.querySelector("body").style.backgroundColor = " green";
	} else if (guess > number) {
		document.querySelector(".message").textContent = "You guessed an higher number";
		//score --
		score = score - 1;
		document.querySelector(".score").textContent = score;
	} else if (guess < number) {
		document.querySelector(".message").textContent = "You guessed an lesser number";
		score = score - 1;
		document.querySelector(".score").textContent = score;
	}
});
