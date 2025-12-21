// assets/js/hero-component.js

function loadHero(line1, line2) {
    // Defines the HTML structure (The Aurora Style)
    const heroHTML = `
    <div class="hero-container">
        <h1 class="hero-aurora">
            ${line1}<br>
            <span class="highlight">${line2}</span>
        </h1>
    </div>
    `;

    // Inject into the placeholder
    const placeholder = document.getElementById('hero-placeholder');
    if (placeholder) {
        placeholder.innerHTML = heroHTML;
    }
}