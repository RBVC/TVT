/* --- START OF FILE data/wiki.js --- */
// wiki.js - Teyvat Entertainment Master Settings & Labels

// 💡 レーベル・マスタ：各所属レーベルの定義
const labels = {
    "HQ": { name: "Teyvat Ent. (HQ)", ceo: "パイモン" },
    "FAVONIUS": { name: "Favonius Music", ceo: "ジン" },
    "QIXING": { name: "Qixing Studio", ceo: "凝光" },
    "NARUKAMI": { name: "Narukami Records", ceo: "雷電将軍" },
    "AKASHA": { name: "Akasha Lab", ceo: "ナヒーダ" },
    "EPICLESES": { name: "Epicleses Promotion", ceo: "フリーナ" }
};

// 💡 データの「受け皿」をグローバルに定義
// 他のJSファイル（gen1us.jsなど）がこの箱の中にデータを追加していきます
window.allGroups = window.allGroups || {};
window.specialProjects = window.specialProjects || {};
window.heaventeenResults = window.heaventeenResults || [];

// 💡 Wikiページ専用のユーティリティ（セクション開閉など）
function toggleSection(cId, bId) {
    const c = document.getElementById(cId);
    const b = document.getElementById(bId);
    if (!c || !b) return;
    c.classList.toggle('collapsed');
    b.innerText = c.classList.contains('collapsed') ? "表示" : "非表示";
}