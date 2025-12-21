// assets/js/nav-component.js

function loadNavbar(isRootFolder) {
    // 1. Determine paths
    const rootPath = isRootFolder ? './' : '../'; 
    const pagesPath = isRootFolder ? 'pages/' : './';

    // 2. Define the HTML
    const navbarHTML = `
    <nav class="navbar">
        <a href="${rootPath}index.html" class="logo">
            HKDSE <strong>ICT</strong>
        </a>

        <ul class="nav-links">
            <li>
                <a href="${pagesPath}past-papers.html">Past Papers (歷屆試題)</a>
            </li>
        </ul>

        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    `;

    // 3. Inject HTML
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // 4. Attach Event Listeners IMMEDIATELY (No timeout needed)
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", (e) => {
                // Toggle the 'active' class on the list
                navLinks.classList.toggle("active");
                // Toggle the 'active' class on the burger (for animation)
                hamburger.classList.toggle("toggle");
            });
        }
    }
}