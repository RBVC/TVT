// group.js - Teyvat Entertainment Master Database

// SPECIAL PROJECTS (TEYVAT TIMES / news.html 用)
const specialProjects = {
    "nightfall-ops": {
        title: "Nightfall Ops",
        tagline: "TIC TOC, IT'S YOUR TURN.",
        mainVisual: "images/nightfall-ops/main.jpg",
        description: "裏社会を支配する『Mafia』と、秩序を守る精鋭『Police』。二つの勢力が、今、激突する。",
        teams: [
            {
                name: "Special Agents",
                model: "nqrse Style",
                members: [
                    { name: "Ayato", role: "COMMANDER", pos: "Lead Vocal / Sub Rapper", desc: "作戦全体の指揮・統括を担う司令塔。コントロールルームから冷徹な指示を出す組織の脳。", img: "images/heaventeen/ayato.jpg" },
                    { name: "Wriothesley", role: "BREACHER", pos: "Main Rapper / Lead Dancer", desc: "前線突破を担う切り込み隊長。屈強な肉体と拳で、ターゲットへの道を力強く切り開く。", img: "images/heaventeen/wriothesley.jpg" },
                    { name: "Tartaglia", role: "INFILTRATOR", pos: "Main Dancer / Lead Rapper", desc: "隠密潜入のスペシャリスト。華麗なガンアクションで、ターゲットを影から確実に排除する。", img: "images/heaventeen/tartaglia.jpg" },
                    { name: "Diluc", role: "CLEANER", pos: "Main Vocal / Lead Dancer", desc: "証拠隠滅と最終制圧を担う。圧倒的な火力ですべてを焼き尽くし、跡形もなく掃除する殿。", img: "images/heaventeen/diluc.jpg" }
                ]
            },
            {
                name: "Back Office",
                model: "Supporters",
                members: [
                    { name: "Zhongli", role: "SUPPORTER", pos: "", desc: "組織の最高顧問にして莫大な資金源。財界の裏で糸を引く、組織の絶対的なバックアップ。", img: "images/heaventeen/zhongli.jpg" },
                    { name: "Alhaitham", role: "PLANNER", pos: "", desc: "作戦立案とシステム構築の天才。綾人が振るう「指揮」の頭脳部分を裏で設計した人物。", img: "images/heaventeen/alhaitham.jpg" },
                    { name: "Kaveh", role: "DESIGNER", pos: "", desc: "エージェントの武器やガジェットを開発。アルハイゼンの理論を形にする、組織随一の技術者。", img: "images/heaventeen/kaveh.jpg" }
                ]
            }
        ]
    },
    "the-sovereign": {
        title: "THE SOVEREIGN",
        tagline: "TIC TOC, IT'S YOUR TURN.",
        mainVisual: "images/the-sovereign/main.jpg",
        description: "裏社会を支配する『Mafia』と、秩序を守る精鋭『Police』。二つの勢力が、今、激突する。",
        teams: [
            {
                name: "Team Mafia",
                model: "Stray Kids",
                members: [
                    { name: "Zhongli", role: "THE BOSS", pos: "Leader / Lead Rapper (Felix)", desc: "裏社会の絶対的頂点。冷徹なまでの判断力と重厚なオーラで組織を束ねる、静かなる支配者。" },
                    { name: "Ayato", role: "THE UNDERBOSS", pos: "All-rounder (Bang Chan)", desc: "組織の頭脳。表向きの交渉から内部の粛正まで、扇子一つで冷徹にこなす組織のナンバー2。" },
                    { name: "Kaeya", role: "THE CONSIGLIERE", pos: "Main Vocal (Seungmin)", desc: "組織の相談役。甘い歌声で情報を引き出し、笑顔の裏で敵の弱みを握り、盤上を自在に操る参謀。" },
                    { name: "Wanderer", role: "THE HEIR", pos: "Main Dancer / Sub Vocal (Lee Know)", desc: "組織の次期継承者。誰にも心を開かず、完璧な技術と冷めた瞳で獲物を追い詰める孤独な天才。" },
                    { name: "Xiao", role: "RIGHT-HAND MAN", pos: "Main Rapper / Lead Vocal (Han)", desc: "ボスの右腕として闇を駆ける暗殺者。一切の情けを捨て、ただ任務のみを遂行する死の執行人。" },
                    { name: "Kazuha", role: "THE BODYGUARD", pos: "Sub Vocal (I.N)", desc: "静寂を纏う護衛。一糸乱れぬ動きで対象を守り抜き、邪魔な存在は風のように速やかに排除する。" },
                    { name: "Tartaglia", role: "MERCENARY", pos: "Main Dancer / Rapper (Hyunjin)", desc: "戦場にのみ生を感じる狂気の傭兵。彼が踊り始めたら最後、周囲は血と硝煙に染まる組織最強の矛。" },
                    { name: "Wriothesley", role: "UNDERCOVER AGENT", pos: "Main Rapper (Changbin)", desc: "組織の重鎮でありながら、その動向は謎に包まれている。圧倒的な力で障害を粉砕する影の実力者。" }
                ]
            },
            {
                name: "Team Police",
                model: "THE BOYZ",
                members: [
                    { name: "Neuvillette", role: "CHIEF JUSTICE", pos: "Leader / Main Vocal (Sangyeon)", desc: "警察の象徴であり絶対的正義。私情を一切挟まない厳格な裁きによって、混沌を秩序へと変える最高責任者。" },
                    { name: "Alhaitham", role: "CHIEF COMMANDER", pos: "Main Dancer / Sub Vocal (Juyeon)", desc: "警察組織の最高指揮官。理論と効率を極め、一寸の狂いもない作戦でマフィアを追い詰める。" },
                    { name: "Venti", role: "THE CASANOVA", pos: "Main Vocal (New)", desc: "自由気ままな詩人を装っているが、その正体は警察組織の礎を築いた真の最高権威。法の枠を超えた真の正義を見通している。" },
                    { name: "Diluc", role: "THE VIGILANTE", pos: "Main Vocal (Kevin)", desc: "組織に属しながらも独自の正義を貫く執行人. 法の隙間を縫って悪を討つ、夜を統べる特別捜査官。" },
                    { name: "Baizhu", role: "THE PATHOLOGIST", pos: "Lead Vocal (Hyunjae)", desc: "死体から真実を紡ぎ出す監察医。知性的な瞳で、マフィアの痕跡を一つ残らず暴き出す検視のスペシャリスト。" },
                    { name: "Tighnari", role: "THE SCIENTIST", pos: "Lead Vocal / Sub Rapper (Jacob)", desc: "最新の科学捜査を司るトップ。現場の微細な証拠から、組織のネットワークを解析する知性の要。" },
                    { name: "Cyno", role: "TACTICAL POLICE", pos: "Main Rapper (Sunwoo)", desc: "現場の先陣を切る特殊部隊長. 法の盾を持ち、逃げ場のない追撃で罪人を制圧するハンター。" },
                    { name: "Kaveh", role: "THE DETECTIVE", pos: "Main Dancer / Sub Vocal (Q)", desc: "情熱を燃やし証拠を追う精鋭捜査官。アルハイゼンと反目しながらも、真実への執念で現場を走る。" }
                ]
            }
        ]
    }
};

// ... labels, heaventeenResults, allGroups は既存のデータを維持 ...
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
            { name: "Aether", div: "???", pos: "Leader / Lead Vocal", label: "HQ", isLeader: true, img: "images/6reeze/heart-aether.jpg" },
            { name: "Heizou", div: "Inazuma", pos: "Lead Rapper / Lead Dancer", label: "NARUKAMI", img: "images/6reeze/heart-heizou.jpg" }
        ],
        discography: [{ title: "EMPATHY", type: "Mini Album", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZKSiU5ZyeY0Tie17AfQ2saxTO7PBpiKqcC7&view=list" width="100%" height="500" frameborder="0"></iframe>` }]
    },
    "universe": {
        name: "TVT U", concept: "HANA", layout: 4, banner: "images/universe/tvt-u.jpg",
        members: [
            { name: "Gaming", div: "Liyue", pos: "Main Vocal", label: "QIXING", img: "images/universe/universe-gaming.jpg" },
            { name: "Chongyun", div: "Liyue", pos: "Lead Rapper", label: "QIXING", img: "images/universe/universe-chongyun.jpg" },
            { name: "Xingqiu", div: "Liyue", pos: "Leader / Main Vocal", label: "QIXING", isLeader: true, img: "images/universe/universe-xingqiu.jpg" },
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