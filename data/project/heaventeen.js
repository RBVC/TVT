/* --- START OF FILE data/project/heaventeen.js --- */
window.specialProjects = window.specialProjects || {};
window.heaventeenResults = window.heaventeenResults || [];

// 💡 作品としてのデータ
window.specialProjects["heaventeen"] = {
    title: "HEAVENTEEN",
    tagline: "TIC TOC, IT'S YOUR TURN.",
    basePath: "images/project/heaventeen/",
    mainVisual: "images/project/heaventeen/main.jpg",
    description: "Teyvat Entertainmentの歴史を塗り替えた、伝説のサバイバルオーディション番組。数多の練習生の中から選ばれた9人が、今、新たな星として輝き始める。",
    teams: [
        {
            name: "Finalists",
            members: [
                { name: "Diluc", role: "Rank 3", desc: "圧倒的な歌唱力で常に上位をキープし続けた不動のセンター候補。", img: "diluc.jpg" },
                { name: "Tartaglia", role: "Rank 1", desc: "最終投票で大逆転を果たし、1位の座を掴み取った野生の天才。", img: "tartaglia.jpg" },
                { name: "Dainsleif", role: "Rank 2", desc: "冷静沈着なパフォーマンスと確かな実力で、国民的プロデューサーを魅了。", img: "dainsleif.jpg" }
            ]
        }
    ]
};

// 💡 Wikiのランキング表用データ
window.heaventeenResults = [
    { name: "Tartaglia", rank0: 9, rank1: 4, rank2: 3, final: 1, result: "GEN1US" },
    { name: "Dainsleif", rank0: 1, rank1: 2, rank2: 4, final: 2, result: "GEN1US" },
    { name: "Diluc", rank0: 2, rank1: 1, rank2: 1, final: 3, result: "GEN1US" },
    { name: "Ayato", rank0: 7, rank1: 6, rank2: 2, final: 4, result: "GEN1US" },
    { name: "Zhongli", rank0: 12, rank1: 10, rank2: 6, final: 5, result: "GEN1US" },
    { name: "Baizhu", rank0: 4, rank1: 7, rank2: 8, final: 6, result: "GEN1US" },
    { name: "Kaeya", rank0: 8, rank1: 5, rank2: 5, final: 7, result: "GEN1US" },
    { name: "Thoma", rank0: 11, rank1: 3, rank2: 9, final: 8, result: "GEN1US" },
    { name: "Itto", rank0: 13, rank1: 11, rank2: 7, final: 9, result: "GEN1US" },
    { name: "Alhaitham", rank0: 3, rank1: 8, rank2: 99, final: 99, result: "4ggravate" },
    { name: "Kaveh", rank0: 10, rank1: 9, rank2: 99, final: 99, result: "4ggravate" },
    { name: "Neuvillette", rank0: 5, rank1: 99, rank2: 99, final: 99, result: "House of the Hearth" },
    { name: "Wriothesley", rank0: 6, rank1: 99, rank2: 99, final: 99, result: "House of the Hearth" }
];