
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


// Hamburger Menu 
	const mobileMenu = document.getElementById("mobileMenu");
	const overlay = document.getElementById("overlay");
	const hamburger = document.querySelector(".hamburger");

	function toggleMenu() {
	  mobileMenu.classList.toggle("active");
	  overlay.classList.toggle("active");
	  hamburger.classList.toggle("hide");
	}

	function closeMenu() {
	  mobileMenu.classList.remove("active");
	  overlay.classList.remove("active");
	  hamburger.classList.remove("hide");
	}
  // Optional: Close menu when a link is clicked (for smooth UX)
  document.querySelectorAll(".mobile-nav-list a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  
	
	
// Notify Popup allow,close button Details
 document.querySelector(".allow-btn").addEventListener("click", function () {
    document.getElementById("notify-popup").style.display = "none";
  });

  document.querySelector(".later-btn").addEventListener("click", function () {
    document.getElementById("notify-popup").style.display = "none";
  });
  
  
// dropdown footer menu for mobile
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.accordion-arrow');

    // Close other open sections
    document.querySelectorAll('.accordion-content').forEach(section => {
      if (section !== content) {
        section.classList.remove('open');
      }
    });
    document.querySelectorAll('.accordion-arrow').forEach(ar => {
      if (ar !== arrow) {
        ar.classList.remove('rotate');
      }
    });

    // Toggle current section
    content.classList.toggle('open');
    arrow.classList.toggle('rotate');
}