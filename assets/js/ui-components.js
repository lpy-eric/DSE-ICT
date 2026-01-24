// assets/js/ui-components.js

/**
 * Generates the HTML string for the scroll indicator.
 * @param {string} id - The unique ID for the scroll button element.
 * @returns {string} HTML string for the indicator.
 */
function getScrollIndicatorHTML(id) {
    return `
        <div class="scroll-indicator" id="${id}">
            <span>Click</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
        </div>
    `;
}

/**
 * Attaches the click event listener to the scroll indicator.
 * @param {string} buttonId - The ID of the scroll button.
 * @param {string} targetId - The ID of the element to scroll to.
 */
function attachScrollLogic(buttonId, targetId) {
    const scrollBtn = document.getElementById(buttonId);
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback if specific target not found
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
        });
    }
}
