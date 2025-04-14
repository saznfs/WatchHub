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
