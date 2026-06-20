// group.js - Artist Master Data
const labels = {
    "HQ": { name: "Teyvat Ent. (HQ)", ceo: "パイモン" },
    "FAVONIUS": { name: "Favonius Music", ceo: "ジン" },
    "QIXING": { name: "Qixing Studio", ceo: "凝光" },
    "NARUKAMI": { name: "Narukami Records", ceo: "雷電将軍" },
    "AKASHA": { name: "Akasha Lab", ceo: "ナヒーダ" },
    "EPICLESES": { name: "Epicleses Promotion", ceo: "フリーナ" }
};

const allGroups = {
    "gen1us": {
        name: "GEN1US", concept: "MASQUERADE", layout: 3,
        basePath: "images/gen1us/masquerade/",
        banner: "main.jpg",
        members: [
            { name: "Diluc", div: "Mondstadt", pos: "Main Vocal / Sub Dancer", label: "FAVONIUS", img: "diluc.jpg" },
            { name: "Zhongli", div: "Liyue", pos: "Lead Rapper / Sub Vocal", label: "QIXING", img: "zhongli.jpg" },
            { name: "Itto", div: "Inazuma", pos: "Main Rapper", label: "NARUKAMI", img: "itto.jpg" },
            { name: "Baizhu", div: "Liyue", pos: "Main Vocal", label: "QIXING", isLeader: true, img: "baizhu.jpg" },
            { name: "Tartaglia", div: "Snezhnaya", pos: "Main Dancer / Lead Rapper", label: "QIXING", img: "tartaglia.jpg" },
            { name: "Ayato", div: "Inazuma", pos: "Visual / Lead Vocal", label: "NARUKAMI", img: "ayato.jpg" },
            { name: "Kaeya", div: "Mondstadt", pos: "Main Vocal", label: "FAVONIUS", img: "kaeya.jpg" },
            { name: "Dainsleif", div: "Mondstadt", pos: "Main Dancer / Sub Rapper", label: "FAVONIUS", img: "dainsleif.jpg" },
            { name: "Thoma", div: "Inazuma", pos: "Lead Dancer / Sub Vocal", label: "NARUKAMI", img: "thoma.jpg" }
        ],
        discography: []
    },
    "4ggravate": {
        name: "4ggravate", concept: "CYBER / HIPHOP", layout: 4,
        basePath: "images/4ggravate/", banner: "4ggravate.jpg",
        members: [
            { name: "Alhaitham", div: "Sumeru", pos: "Main Dancer / Lead Rapper", label: "AKASHA", img: "cyber-alhaitham.jpg" },
            { name: "Cyno", div: "Sumeru", pos: "Main Rapper", label: "AKASHA", img: "cyber-cyno.jpg" },
            { name: "Kaveh", div: "Sumeru", pos: "Lead Dancer / Lead Vocal", label: "AKASHA", img: "cyber-kaveh.jpg" },
            { name: "Tighnari", div: "Sumeru", pos: "Main Vocal", label: "AKASHA", isLeader: true, img: "cyber-tighnari.jpg" },
            { name: "Aether", div: "???", pos: "Main Vocal / Lead Dancer", label: "HQ", isFormer: true },
            { name: "Wanderer", div: "Inazuma", pos: "Main Dancer / Sub Vocal", label: "AKASHA", isFormer: true }
        ],
        discography: [{ title: "All Out", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZfjiU5ZFUGomJCKJ8XBS3YOVjqAVYqbB2EX&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "6reeze": {
        name: "6reeze", concept: "EMPATHY", layout: 3,
        basePath: "images/6reeze/", banner: "6reeze.jpg",
        members: [
            { name: "Wanderer", div: "Inazuma", pos: "Main Dancer / Sub Vocal / Sub Rapper", label: "AKASHA", img: "heart-wanderer.jpg" },
            { name: "Xiao", div: "Liyue", pos: "Main Rapper / Sub Vocal", label: "QIXING", img: "heart-xiao.jpg" },
            { name: "Venti", div: "Mondstadt", pos: "Main Vocal / Center", label: "FAVONIUS", img: "heart-venti.jpg" },
            { name: "Kazuha", div: "Inazuma", pos: "Main Vocal / Lead Dancer", label: "NARUKAMI", img: "heart-kazuha.jpg" },
            { name: "Aether", div: "???", pos: "Leader / Lead Vocal", label: "HQ", isLeader: true, img: "heart-aether.jpg" },
            { name: "Heizou", div: "Inazuma", pos: "Lead Rapper / Lead Dancer", label: "NARUKAMI", img: "heart-heizou.jpg" }
        ],
        discography: [{ title: "EMPATHY", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZKSiU5ZyeY0Tie17AfQ2saxTO7PBpiKqcC7&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "universe": {
        name: "TVT U", concept: "HANA", layout: 4,
        basePath: "images/universe/", banner: "tvt-u.jpg",
        members: [
            { name: "Gaming", div: "Liyue", pos: "Main Vocal", label: "QIXING", img: "universe-gaming.jpg" },
            { name: "Chongyun", div: "Liyue", pos: "Lead Rapper", label: "QIXING", img: "universe-chongyun.jpg" },
            { name: "Xingqiu", div: "Liyue", pos: "Leader / Main Vocal", label: "QIXING", isLeader: true, img: "universe-xingqiu.jpg" },
            { name: "Albedo", div: "Mondstadt", pos: "Sub Vocal", label: "FAVONIUS", img: "universe-albedo.jpg" },
            { name: "Gorou", div: "Inazuma", pos: "Lead Dancer", label: "NARUKAMI", img: "universe-gorou.jpg" },
            { name: "Bennett", div: "Mondstadt", pos: "Main Dancer", label: "FAVONIUS", img: "universe-bennett.jpg" },
            { name: "Razor", div: "Mondstadt", pos: "Main Rapper", label: "FAVONIUS", img: "universe-razor.jpg" }
        ],
        discography: [{ title: "HANA", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZpJiU5ZTiglKk3h3KXhuoUPRUSWTL7UJ5Ok&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "hoth": {
        name: "House of the Hearth", concept: "EPICLESES", layout: 4,
        basePath: "images/hoth/", banner: "",
        members: [
            { name: "Neuvillette", div: "Fontaine", pos: "Leader / Main Vocal", label: "EPICLESES", isLeader: true, img: "" },
            { name: "Wriothesley", div: "Fontaine", pos: "Main Rapper", label: "EPICLESES", img: "" },
            { name: "Lyney", div: "Fontaine", pos: "Main Dancer", label: "EPICLESES", img: "" },
            { name: "Freminet", div: "Fontaine", pos: "Lead Vocal", label: "EPICLESES", img: "" }
        ],
        discography: []
    }
};