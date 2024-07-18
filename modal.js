const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
console.log(btnOpen);

for (let i = 0; i < btnOpen.length; i++)
	btnOpen[i].addEventListener("click", function () {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
