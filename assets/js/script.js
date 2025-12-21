/* NOTE: Hamburger menu logic is now handled in 'nav-component.js'
   to avoid conflicts. Do not add it here.
*/

// 1. Dynamic Greeting based on time
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = "Welcome to ICT Revision";

if (hour < 12) {
    greetingText = "Good Morning! Ready to revise?";
} else if (hour < 18) {
    greetingText = "Good Afternoon! Keep up the progress.";
} else {
    greetingText = "Good Evening! Time for some study.";
}

if(greetingElement) {
    greetingElement.innerText = greetingText;
}

/* ACCORDION LOGIC FOR PAST PAPERS */
const yearHeaders = document.querySelectorAll('.year-header');

yearHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

/* TOPIC CARD INTERACTION */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').innerText;
            alert("You selected: " + title + "\n\nContent for this module is coming soon!");
        });
    });
});