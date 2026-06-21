/* --- START OF FILE common.js --- */
function loadCommonParts() {
    let groupLinksHTML = '';
    if (window.allGroups) {
        groupLinksHTML = Object.keys(allGroups).map(id => {
            return `<a href="artist.html?id=${id}">${allGroups[id].name}</a>`;
        }).join('');
    }

    const headerHTML = `
    <header>
        <a href="index.html" class="tvt-logo" style="font-size: 1.8rem;">TVT</a>
        <div class="menu-trigger" id="menu-btn"><span></span><span></span><span></span></div>
    </header>
    <div class="nav-overlay" id="nav-menu">
        <div class="nav-container">
            <div class="nav-group">
                <a href="index.html?tab=artists" onclick="handleMenuTabSwitch('artists')">Artists</a>
                <div class="sub-menu">${groupLinksHTML}</div>
            </div>
            <div class="nav-group">
                <a href="index.html?tab=news" onclick="handleMenuTabSwitch('news')">News</a>
            </div>
            <div class="nav-group">
                <a href="wiki.html">Wiki</a>
            </div>
        </div>
    </div>
    `;
    
    const footerHTML = `
    <footer>
        <div class="f-logo tvt-logo">TVT</div>
        <p>&copy; Teyvat Entertainment All Rights Reserved.</p>
    </footer>
    `;

    if (document.getElementById('common-header')) document.getElementById('common-header').innerHTML = headerHTML;
    if (document.getElementById('common-footer')) document.getElementById('common-footer').innerHTML = footerHTML;
    initMenu();
    if (document.getElementById('latest-news-list')) loadLatestNews();
}

function initMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-menu');
    if (!btn || !nav) return;
    btn.onclick = () => {
        btn.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : 'auto';
    };
}

function handleMenuTabSwitch(tabName) {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-menu');
    if (btn) btn.classList.remove('active');
    if (nav) nav.classList.remove('open');
    document.body.style.overflow = 'auto';

    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        if (typeof switchMainTab === 'function') switchMainTab(tabName);
    }
}

function loadLatestNews() {
    const list = document.getElementById('latest-news-list');
    if (!list) return;
    const keys = Object.keys(specialProjects).reverse().slice(0, 3);
    keys.forEach(key => {
        const p = specialProjects[key];
        list.innerHTML += `
            <a href="news.html?id=${key}" class="group cursor-pointer block">
                <p class="text-[10px] text-gray-400 mb-4 uppercase tracking-[0.4em] font-bold">Project / Archive</p>
                <h3 class="text-2xl font-bold mb-6 group-hover:text-gray-500 transition">${p.title}</h3>
                <div class="aspect-video bg-gray-100 overflow-hidden border border-gray-100">
                    <img src="${p.mainVisual}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105">
                </div>
            </a>`;
    });
}
window.addEventListener('DOMContentLoaded', loadCommonParts);