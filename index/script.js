// ----- SLIDER SCRIPT -----
const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let index = 0;

function moveSlider() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(moveSlider, 4000); // Move every 4s

// ----- NEWSLETTER MODAL SCRIPT -----
const form = document.querySelector('.subscribe-form');
const modal = document.getElementById('discountModal');

if (form && modal) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    modal.style.display = 'block';
  });
}

function closeModal() {
  modal.style.display = 'none';
}

function copyCode() {
  const input = document.querySelector('.discount-code input');
  input.select();
  input.setSelectionRange(0, 99999); // For mobile
  document.execCommand('copy');
  alert("Code copied: " + input.value);
}

// Optional: close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
