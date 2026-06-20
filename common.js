// common.js - Teyvat Entertainment 共通パーツ管理システム

function loadCommonParts() {
    const headerHTML = `
    <header>
        <a href="index.html" class="tvt-logo" style="font-size: 1.8rem;">TVT</a>
        <div class="menu-trigger" id="menu-btn">
            <span></span><span></span><span></span>
        </div>
    </header>

    <div class="nav-overlay" id="nav-menu">
        <a href="index.html#artists" class="menu-link">Artists</a>
        <a href="index.html#latest-news" class="menu-link">News</a>
        <a href="wiki.html" class="menu-link">Wiki</a>
    </div>
    `;

    const footerHTML = `
    <footer>
        <div class="f-logo tvt-logo">TVT</div>
        <p>&copy; Teyvat Entertainment All Rights Reserved.</p>
    </footer>
    `;

    if (document.getElementById('common-header')) {
        document.getElementById('common-header').innerHTML = headerHTML;
        initMenu();
    }
    if (document.getElementById('common-footer')) {
        document.getElementById('common-footer').innerHTML = footerHTML;
    }
}

function initMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (menuBtn && navMenu) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
        };

        menuLinks.forEach(link => {
            link.onclick = () => {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            };
        });
    }
}

window.addEventListener('DOMContentLoaded', loadCommonParts);