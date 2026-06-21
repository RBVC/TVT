/* --- START OF FILE common.js --- */
function loadCommonParts() {
    const headerHTML = `
    <header>
        <a href="index.html" class="tvt-logo" style="font-size: 1.8rem;">TVT</a>
        <div class="menu-trigger" id="menu-btn"><span></span><span></span><span></span></div>
    </header>
    <div class="nav-overlay" id="nav-menu">
        <a href="index.html#artists-section" class="menu-link">Artists</a>
        <a href="index.html#latest-news" class="menu-link">News</a>
        <a href="wiki.html" class="menu-link">Wiki</a>
    </div>
    `;
    const footerHTML = `
    <footer>
        <div class="f-logo tvt-logo">TVT</a>
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
    document.querySelectorAll('.menu-link').forEach(l => {
        l.onclick = () => { nav.classList.remove('open'); btn.classList.remove('active'); document.body.style.overflow = 'auto'; };
    });
}

function loadLatestNews() {
    const list = document.getElementById('latest-news-list');
    if (!list) return;
    
    // 💡 最新の3件を表示するように変更（HEAVENTEENも含めるため）
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