/* NOTE: Hamburger menu logic is in 'nav-component.js' */

// 1. Dynamic Greeting (Keep your existing code)
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

/* ACCORDION LOGIC FOR PAST PAPERS (Keep your existing code) */
const yearHeaders = document.querySelectorAll('.year-header');
yearHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

/* UPDATED TOPIC CARD INTERACTION - LINKS TO NEW PAGES */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    
    // Map card titles to filenames
    const pageMap = {
        "💾 Information Processing": "pages/information-processing.html",
        "💻 Computer Systems": "pages/computer-systems.html",
        "🌐 Internet & Apps": "pages/internet-apps.html",
        "⌨️ Computational Thinking": "pages/computational-thinking.html"
    };

    cards.forEach(card => {
        card.style.cursor = "pointer"; // Make it look clickable
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').innerText;
            const targetPage = pageMap[title];
            
            if (targetPage) {
                window.location.href = targetPage;
            } else {
                alert("Page under construction!");
            }
        });
    });
});