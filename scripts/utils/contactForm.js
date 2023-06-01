const openFormButton = document.querySelector(".contact_button");
openFormButton.addEventListener("click", displayModal)

const closeFormButton = document.querySelector(".modal .close_modal");
closeFormButton.addEventListener("click", closeModal)

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}