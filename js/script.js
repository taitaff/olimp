window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	
	let tab = document.querySelectorAll(".ratetab"),
		info = document.querySelector(".ratetabs"),
		tabContect = document.querySelectorAll(".rate");
	
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("showtab");
			tabContect[i].classList.add("hidetab");
		}
	}
	
	hideTabContect(1);
	
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hidetab")) {
			tabContect[b].classList.remove("hidetab");
			tabContect[b].classList.add("showtab");
		}
	}

	
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("ratetab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContect(0);
					tab.forEach((item) => {
						item.classList.remove("activetab");
					});
					target.classList.add("activetab");
					ShowTabContect(i);
					break;
				}
			}
		}
	});

	const modal = document.getElementById("modal");
	const btn = document.querySelector(".open-modal__btn");
	const btnprice = document.querySelector(".pricepermonth");
	const btnpricee = document.querySelector(".allprice");
	const closeBtn = document.querySelector(".modal__close");

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

	btnprice.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

	btnpricee.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		hamb.classList.toggle('open');
	}
});