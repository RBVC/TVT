/* --- START OF FILE data/project/heaventeen.js --- */
window.specialProjects = window.specialProjects || {};
window.heaventeenResults = window.heaventeenResults || [];

// 💡 作品としてのデータ：Newsページで表示される内容
window.specialProjects["heaventeen"] = {
    title: "HEAVENTEEN",
    tagline: "TIC TOC, IT'S YOUR TURN.",
    basePath: "images/project/heaventeen/",
    mainVisual: "images/project/heaventeen/main.jpg",
    description: "Teyvat Entertainmentの歴史を塗り替えた、伝説のサバイバルオーディション番組。全5ディビジョンから集結した候補生たちが、デビューの座を懸けて熾烈なバトルを繰り広げた。数ヶ月に及ぶ合宿、ユニットバトルを経て、国民投票により選ばれた「GEN1US」誕生の全記録。",
    teams: [
        {
            name: "Debut Group: GEN1US",
            members: [
                { name: "Tartaglia", role: "Final Rank 1", desc: "最終回で驚異的な得票数を叩き出し、逆転1位に輝いた『戦闘狂』のパフォーマー。", img: "tartaglia.jpg" },
                { name: "Dainsleif", role: "Final Rank 2", desc: "圧倒的なダンススキルとミステリアスな色気で、常にトップ圏内を独走した実力者。", img: "dainsleif.jpg" },
                { name: "Diluc", role: "Final Rank 3", desc: "メインボーカルとしての絶対的な安心感と、ストイックな姿勢で練習生たちの指標となった。", img: "diluc.jpg" },
                { name: "Ayato", role: "Final Rank 4", desc: "「神里の若大将」の愛称で親しまれ、上品かつ華やかなビジュアルでファンを魅了。", img: "ayato.jpg" },
                { name: "Zhongli", role: "Final Rank 5", desc: "最年長としてチームを支えつつ、唯一無二の低音ラップで楽曲に深みを与えた重鎮。", img: "zhongli.jpg" },
                { name: "Baizhu", role: "Final Rank 6", desc: "繊細なボーカル表現と、知性あふれるリーダーシップでチームを勝利に導いた。", img: "baizhu.jpg" },
                { name: "Kaeya", role: "Final Rank 7", desc: "見る者を惹きつける表情管理の天才。ディルックとのシナジーは番組最大の話題に。", img: "kaeya.jpg" },
                { name: "Thoma", role: "Final Rank 8", desc: "周囲を明るく照らす太陽のような存在。ダンスのキレと誠実な人柄で支持を広げた。", img: "thoma.jpg" },
                { name: "Itto", role: "Final Rank 9", desc: "持ち前の明るさと爆発力のあるラップで、最後の椅子を勝ち取った『奇跡の男』。", img: "itto.jpg" }
            ]
        },
        {
            name: "Challengers",
            members: [
                { name: "Alhaitham", role: "Semi-Finalist", desc: "理論に基づいた完璧なパフォーマンスを見せたが、惜しくもデビューを逃した知性派。", img: "alhaitham.jpg" },
                { name: "Kaveh", role: "Semi-Finalist", desc: "豊かな感受性を活かした表現力で注目を集めた。アルハイゼンとの衝突と絆は番組の名場面。", img: "kaveh.jpg" },
                { name: "Neuvillette", role: "Initial Candidate", desc: "序盤から圧倒的な歌唱力を披露。現在は別レーベルからのデビューが期待されている。", img: "neuvillette.jpg" },
                { name: "Wriothesley", role: "Initial Candidate", desc: "男気あふれるパフォーマンスで熱狂的なファンを獲得。番組を彩った強烈な個性の一人。", img: "wriothesley.jpg" },
                { name: "Zhongli", role: "Candidate", desc: "（予備枠）", img: "zhongli.jpg" }
            ]
        }
    ]
};

// 💡 Wikiのランキング表用データ（以前と同様）
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