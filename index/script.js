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
  
  
// Clock Details
function updateClock() {
	  const now = new Date();
	  const hour = String(now.getHours()).padStart(2, '0');
	  const minute = String(now.getMinutes()).padStart(2, '0');
	  const second = String(now.getSeconds()).padStart(2, '0');
	  
	  // Update the clock with hour, minute, and second
	  document.getElementById('hour').textContent = hour;
	  document.getElementById('minute').textContent = minute;
	  document.getElementById('second').textContent = second;
	}

	setInterval(updateClock, 1000); // Update every second
	updateClock(); // Initial call to set the clock immediately
	
	
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
