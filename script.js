// Getting modal element and modal content element from the DOM
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

// Function to show modal with the clicked image
function showModal(image) {
  // Displaying modal
  modal.style.display = "block";
  // Setting the source of the modal content to the clicked image source
  modalContent.src = image.src;
}

// Function to hide modal
function hideModal() {
  // Hiding modal
  modal.style.display = "none";
}

// Adding click event listener to modal close button to hide modal when clicked
document.getElementById("modal-close-button").onclick = hideModal;
