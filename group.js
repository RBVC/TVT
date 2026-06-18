// group.js - Teyvat Entertainment Master Database

// SPECIAL PROJECTS (TEYVAT TIMES / news.html 用)
const specialProjects = {
    "mafia-vs-police": {
        title: "Mafia vs Police",
        tagline: "The Chessboard of Teyvat: Who truly moves the pieces?",
        mainVisual: "images/mafia_vs_police/main.jpg",
        description: "裏社会を支配する『Mafia』と、秩序を守る精鋭『Police』。二つの勢力が激突する、Teyvat Entertainment 史上最大のスペシャルプロジェクト。表向きの総監はヌヴィレットだが、Policeの真の支配者は別にいるという噂も……。",
        teams: [
            {
                name: "Team Mafia",
                model: "Stray Kids",
                members: [
                    { name: "Zhongli", role: "THE BOSS", img: "images/mafia_vs_police/mafia/zhongli.jpg" },
                    { name: "Ayato", role: "THE UNDERBOSS", img: "images/mafia_vs_police/mafia/ayato.jpg" },
                    { name: "Xiao", role: "RIGHT-HAND MAN", img: "images/mafia_vs_police/mafia/xiao.jpg" },
                    { name: "Tartaglia", role: "MERCENARY", img: "images/mafia_vs_police/mafia/tartaglia.jpg" },
                    { name: "Wanderer", role: "THE HEIR", img: "images/mafia_vs_police/mafia/wanderer.jpg" },
                    { name: "Kaeya", role: "THE CONSIGLIERE", img: "images/mafia_vs_police/mafia/kaeya.jpg" },
                    { name: "Kazuha", role: "THE BODYGUARD", img: "images/mafia_vs_police/mafia/kazuha.jpg" },
                    { name: "Wriothesley", role: "UNDERCOVER AGENT", img: "images/mafia_vs_police/mafia/wriothesley.jpg" }
                ]
            },
            {
                name: "Team Police",
                model: "THE BOYZ",
                members: [
                    { name: "Venti", role: "THE CASANOVA (True Mastermind)", img: "images/mafia_vs_police/police/venti.jpg" },
                    { name: "Neuvillette", role: "CHIEF JUSTICE", img: "images/mafia_vs_police/police/neuvillette.jpg" },
                    { name: "Alhaitham", role: "CHIEF COMMANDER", img: "images/mafia_vs_police/police/alhaitham.jpg" },
                    { name: "Diluc", role: "THE VIGILANTE", img: "images/mafia_vs_police/police/diluc.jpg" },
                    { name: "Baizhu", role: "THE PATHOLOGIST", img: "images/mafia_vs_police/police/baizhu.jpg" },
                    { name: "Cyno", role: "TACTICAL POLICE", img: "images/mafia_vs_police/police/cyno.jpg" },
                    { name: "Tighnari", role: "THE SCIENTIST", img: "images/mafia_vs_police/police/tighnari.jpg" },
                    { name: "Kaveh", role: "THE DETECTIVE", img: "images/mafia_vs_police/police/kaveh.jpg" }
                ]
            }
        ]
    }
};

// ...以下の heaventeenResults, labels, allGroups は既存のデータを維持...
const heaventeenResults = [
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
    { name: "Neuvillette", rank0: 5, rank1: 99, rank2: 99, final: 99, result: "H.O.T.H" },
    { name: "Wriothesley", rank0: 6, rank1: 99, rank2: 99, final: 99, result: "H.O.T.H" }
];

const labels = {
    "HQ": { name: "TEYVAT ENT. (HQ)", ceo: "パイモン" },
    "FAVONIUS": { name: "FAVONIUS MUSIC", ceo: "ジン" },
    "QIXING": { name: "QIXING STUDIO", ceo: "凝光" },
    "NARUKAMI": { name: "NARUKAMI RECORDS", ceo: "雷電将軍" },
    "AKASHA": { name: "AKASHA LAB", ceo: "ナヒーダ" },
    "EPICLESES": { name: "EPICLESES PROMOTION", ceo: "フリーナ" }
};

const allGroups = {
    "gen1us": {
        name: "GEN1US", concept: "MASQUERADE", layout: 3, banner: "images/gen1us/masquerade-gen1us.jpg",
        members: [
            { name: "Diluc", div: "Mondstadt", pos: "Main Vocal / Sub Dancer", label: "FAVONIUS", img: "images/gen1us/masquerade-diluc.jpg" },
            { name: "Zhongli", div: "Liyue", pos: "Lead Rapper / Sub Vocal", label: "QIXING", img: "images/gen1us/masquerade-zhongli.jpg" },
            { name: "Itto", div: "Inazuma", pos: "Main Rapper", label: "NARUKAMI", img: "images/gen1us/masquerade-itto.jpg" },
            { name: "Baizhu", div: "Liyue", pos: "Main Vocal", label: "QIXING", isLeader: true, img: "images/gen1us/masquerade-baizhu.jpg" },
            { name: "Tartaglia", div: "Snezhnaya", pos: "Main Dancer / Lead Rapper", label: "QIXING", img: "images/gen1us/masquerade-tartaglia.jpg" },
            { name: "Ayato", div: "Inazuma", pos: "Visual / Lead Vocal", label: "NARUKAMI", img: "images/gen1us/masquerade-ayato.jpg" },
            { name: "Kaeya", div: "Mondstadt", pos: "Main Vocal", label: "FAVONIUS", img: "images/gen1us/masquerade-kaeya.jpg" },
            { name: "Dainsleif", div: "Mondstadt", pos: "Main Dancer / Sub Rapper", label: "FAVONIUS", img: "images/gen1us/masquerade-dainsleif.jpg" },
            { name: "Thoma", div: "Inazuma", pos: "Lead Dancer / Sub Vocal", label: "NARUKAMI", img: "images/gen1us/masquerade-thoma.jpg" }
        ],
        discography: []
    },
    "4ggravate": {
        name: "4ggravate", concept: "CYBER / HIPHOP", layout: 4, banner: "images/4ggravate/4ggravate.jpg",
        members: [
            { name: "Alhaitham", div: "Sumeru", pos: "Main Dancer / Lead Rapper", label: "AKASHA", img: "images/4ggravate/cyber-alhaitham.jpg" },
            { name: "Cyno", div: "Sumeru", pos: "Main Rapper", label: "AKASHA", img: "images/4ggravate/cyber-cyno.jpg" },
            { name: "Kaveh", div: "Sumeru", pos: "Lead Dancer / Lead Vocal", label: "AKASHA", img: "images/4ggravate/cyber-kaveh.jpg" },
            { name: "Tighnari", div: "Sumeru", pos: "Main Vocal", label: "AKASHA", isLeader: true, img: "images/4ggravate/cyber-tighnari.jpg" },
            { name: "Aether", div: "???", pos: "Main Vocal / Lead Dancer", label: "HQ", isFormer: true },
            { name: "Wanderer", div: "Inazuma", pos: "Main Dancer / Sub Vocal", label: "AKASHA", isFormer: true }
        ],
        discography: [{ title: "All Out", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZfjiU5ZFUGomJCKJ8XBS3YOVjqAVYqbB2EX&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "6reeze": {
        name: "6reeze", concept: "EMPATHY", layout: 3, banner: "images/6reeze/6reeze.jpg",
        members: [
            { name: "Wanderer", div: "Inazuma", pos: "Main Dancer / Sub Vocal / Sub Rapper", label: "AKASHA", img: "images/6reeze/heart-wanderer.jpg" },
            { name: "Xiao", div: "Liyue", pos: "Main Rapper / Sub Vocal", label: "QIXING", img: "images/6reeze/heart-xiao.jpg" },
            { name: "Venti", div: "Mondstadt", pos: "Main Vocal / Center", label: "FAVONIUS", img: "images/6reeze/heart-venti.jpg" },
            { name: "Kazuha", div: "Inazuma", pos: "Main Vocal / Lead Dancer", label: "NARUKAMI", img: "images/6reeze/heart-kazuha.jpg" },
            { name: "Aether", div: "???", pos: "Lead Vocal", label: "HQ", isLeader: true, img: "images/6reeze/heart-aether.jpg" },
            { name: "Heizou", div: "Inazuma", pos: "Lead Rapper / Lead Dancer", label: "NARUKAMI", img: "images/6reeze/heart-heizou.jpg" }
        ],
        discography: [{ title: "EMPATHY", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZKSiU5ZyeY0Tie17AfQ2saxTO7PBpiKqcC7&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "universe": {
        name: "TVT U", concept: "HANA", layout: 4, banner: "images/universe/tvt-u.jpg",
        members: [
            { name: "Gaming", div: "Liyue", pos: "Main Vocal", label: "QIXING", img: "images/universe/universe-gaming.jpg" },
            { name: "Chongyun", div: "Liyue", pos: "Lead Rapper", label: "QIXING", img: "images/universe/universe-chongyun.jpg" },
            { name: "Xingqiu", div: "Liyue", pos: "Main Vocal", label: "QIXING", isLeader: true, img: "images/universe/universe-xingqiu.jpg" },
            { name: "Albedo", div: "Mondstadt", pos: "Sub Vocal", label: "FAVONIUS", img: "images/universe/universe-albedo.jpg" },
            { name: "Gorou", div: "Inazuma", pos: "Lead Dancer", label: "NARUKAMI", img: "images/universe/universe-gorou.jpg" },
            { name: "Bennett", div: "Mondstadt", pos: "Main Dancer", label: "FAVONIUS", img: "images/universe/universe-bennett.jpg" },
            { name: "Razor", div: "Mondstadt", pos: "Main Rapper", label: "FAVONIUS", img: "images/universe/universe-razor.jpg" }
        ],
        discography: [{ title: "HANA", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZpJiU5ZTiglKk3h3KXhuoUPRUSWTL7UJ5Ok&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "hoth": {
        name: "House of the Hearth", concept: "EPICLESES", layout: 4, banner: "",
        members: [
            { name: "Neuvillette", div: "Fontaine", pos: "Main Vocal", label: "EPICLESES", isLeader: true, img: "" },
            { name: "Wriothesley", div: "Fontaine", pos: "Main Rapper", label: "EPICLESES", img: "" },
            { name: "Lyney", div: "Fontaine", pos: "Main Dancer", label: "EPICLESES", img: "" },
            { name: "Freminet", div: "Fontaine", pos: "Lead Vocal", label: "EPICLESES", img: "" }
        ],
        discography: []
    }
};