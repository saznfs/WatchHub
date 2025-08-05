// Get references to the hamburger menu and nav links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the navigation menu
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});

function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the email value entered by the user
        const email = document.getElementById('email').value;

        // Show an alert with the email
        alert('Thank you for signing up! We will send updates to ' + email);

    }

