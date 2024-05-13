/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
nanClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if(navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu');
//     });
// }

function toggleDescription(cardElement) {
    const description = cardElement.querySelector('.card-description');
    description.style.display = (description.style.display === 'block' ? 'none' : 'block');
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we shld remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*=============== CONTACT FORM =============== */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            subject: document.getElementById('contact-subject').value,
            message: document.getElementById('contact-message').value
        };

        console.log('Form Data:', formData);

      
    });
});


document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("fxU2wu2ojUApUSgda"); // Initialize EmailJS with your user ID.

    const form = document.getElementById('contact-form');
    console.log(document.getElementById('contact-name'));
    const errorMessage = document.getElementById('error-message');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Disable the submit button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Validate form fields
        if (!form.checkValidity()) {
            errorMessage.textContent = "Please fill in all required fields correctly.";
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
            return;
        }

        // Gather data for console logging (testing purposes)
        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            subject: document.getElementById('contact-subject').value,
            message: document.getElementById('contact-message').value
        };
        console.log('Form Data:', formData);

        emailjs.sendForm('service_xqgadm8', 'template_jsnn6lt', this)
            .then(function() {
                errorMessage.textContent = 'Message sent successfully!';
                console.log('Email successfully sent!');
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
                form.reset(); // Reset form after successful submission
            }, function(error) {
                errorMessage.textContent = 'Failed to send message. Error: ' + error.text;
                console.error('Email sending error:', error);
            }).finally(() => {
                // Re-enable the submit button after the email is sent
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            });
    });
});