/* NOTE: Hamburger menu logic is in 'nav-component.js' */

/* UPDATED TOPIC CARD INTERACTION - LINKS TO NEW PAGES */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    
    // Map card titles to filenames
    const pageMap = {
        "Information Processing": "pages/information-processing.html",
        "Computer System Fundamentals": "pages/computer-systems.html",
        "Internet and its Applications": "pages/internet-apps.html",
        "Computational Thinking and Programming": "pages/computational-thinking.html",
        "Social Implications": "",
        "Databases": "",
        "Web Application Development": "",
        "Algorithm and Programming": ""
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
