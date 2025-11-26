const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popupForm");

openPopup.onclick = () => popup.style.display = "block";
closePopup.onclick = () => popup.style.display = "none";

// Close when clicking outside the popup box
window.onclick = (e) => {
    if (e.target == popup) popup.style.display = "none";
};