/* NOTE: Hamburger menu logic is in 'nav-component.js' */

/* UPDATED TOPIC CARD INTERACTION - LINKS TO NEW PAGES */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    
    // Map card titles to filenames
    const pageMap = {
        "Information Processing": "",
        "Computer System Fundamentals": "",
        "Internet & its Applications": "",
        "Computational Thinking & Programming": "",
        "Social Implications": "",
        "Databases": "",
        "Web Application Development": "",
        "Algorithm & Programming": ""
    };

    // 1. Run Text Resizing Logic (Only if on PC/Tablet usually, but safe to run always)
    if (window.innerWidth >= 768) {
         // Using the helper from ui-components.js
         if (typeof fitTextToContainer === 'function') {
             fitTextToContainer('.topic-card h3');
         }
    }
    
    // Add resize listener to re-calculate on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (typeof fitTextToContainer === 'function') {
                fitTextToContainer('.topic-card h3');
            }
        } else {
             // Reset on mobile if needed, or leave as is. 
             // Mobile layout is vertical stack so usually plenty of width, 
             // or standard wrapping is preferred? User asked for "Computer Layout".
             // We can clear inline styles to let CSS take over on mobile.
             document.querySelectorAll('.topic-card h3').forEach(el => el.style.fontSize = '');
        }
    });

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
