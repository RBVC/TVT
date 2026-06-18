// common.js - Teyvat Entertainment 共通パーツ管理システム

function loadCommonParts() {
    // 共通ヘッダーの注入
    const headerHTML = `
    <header>
        <a href="index.html" class="logo">TVT</a>
        <div class="menu-trigger" id="menu-btn">
            <span></span><span></span><span></span>
        </div>
    </header>

    <div class="nav-overlay" id="nav-menu">
        <a href="index.html#artists" class="menu-link">ARTISTS</a>
        <a href="wiki.html" class="menu-link">WIKI</a>
    </div>
    `;

    // 共通フッターの注入
    const footerHTML = `
    <footer>
        <div class="f-logo">TVT</div>
        <p>&copy; Teyvat Entertainment All Rights Reserved.</p>
    </footer>
    `;

    // ページに挿入（IDがある場合のみ）
    if (document.getElementById('common-header')) {
        document.getElementById('common-header').innerHTML = headerHTML;
        initMenu(); // メニュー動作の初期化
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

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', loadCommonParts);