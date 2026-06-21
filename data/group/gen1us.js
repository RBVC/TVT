/* --- START OF FILE data/group/gen1us.js --- */
window.allGroups = window.allGroups || {};
window.allGroups["gen1us"] = {
    name: "GEN1US",
    concept: "MASQUERADE",
    layout: 3,
    basePath: "images/group/gen1us/",
    banner: "main.jpg",
    // 💡 Wiki用の詳細解説
    description: "Teyvat Entertainment所属の9人組男性アイドルグループ。レーベル合同サバイバル番組『HEAVENTEEN』の合格者によって結成された。メンバーはモンド・璃月・稲妻の各ディビジョンから選抜されており、デビュー前から俳優、モデル、小説家、アーティスト、インフルエンサーとして各界の第一線で活躍していた多種多様なプロフェッショナル集団であることが最大の特徴。パフォーマンス面では、ONEUSやSF9をロールモデルとしたクールかつラグジュアリーな楽曲を得意とし、高い歌唱力と9人のシンクロダンスで圧倒的なクオリティを誇る。グループ内には、番組最終選考時のチーム編成をそのまま継承した派生ユニット「DCKZ」「BADIT」が存在しており、現在もコンセプトの異なるパフォーマンスを展開している。",
    units: ["DCKZ", "BADIT"],
    members: [
        { name: "Diluc", div: "Mondstadt", pos: "Main Vocal / Lead Dancer", label: "FAVONIUS", img: "diluc.jpg", remarks: "アーティスト（Kaeyaとユニット活動中）" },
        { name: "Zhongli", div: "Liyue", pos: "Lead Rapper / Sub Vocal", label: "QIXING", img: "zhongli.jpg", remarks: "モデル・小説家" },
        { name: "Itto", div: "Inazuma", pos: "Main Rapper", label: "NARUKAMI", img: "itto.jpg", remarks: "ラッパー" },
        { name: "Baizhu", div: "Liyue", pos: "Main Vocal", label: "QIXING", isLeader: true, img: "baizhu.jpg", remarks: "俳優" },
        { name: "Tartaglia", div: "Snezhnaya", pos: "Main Dancer / Lead Rapper", label: "QIXING", img: "tartaglia.jpg", remarks: "インフルエンサー" },
        { name: "Ayato", div: "Inazuma", pos: "Visual / Lead Vocal", label: "NARUKAMI", img: "ayato.jpg", remarks: "モデル" },
        { name: "Kaeya", div: "Mondstadt", pos: "Main Vocal", label: "FAVONIUS", img: "kaeya.jpg", remarks: "アーティスト（Dilucとユニット活動中）" },
        { name: "Dainsleif", div: "Mondstadt", pos: "Main Dancer / Sub Rapper", label: "FAVONIUS", img: "dainsleif.jpg", remarks: "俳優" },
        { name: "Thoma", div: "Inazuma", pos: "Lead Dancer / Sub Vocal", label: "NARUKAMI", img: "thoma.jpg", remarks: "アクション俳優" }
    ],
    // 💡 内部機密資料セクション用データ
    confidential: {
        ageTeams: [
            { name: "年長チーム", members: "ダイン・鍾離・白朮" },
            { name: "年中チーム", members: "綾人・ディルック・一斗" },
            { name: "年少チーム", members: "ガイア・トーマ・タルタリヤ" }
        ],
        couplings: ["ガイア × ディルック", "鍾離 × タルタリヤ", "トーマ × 綾人", "ダイン × 白朮"],
        ratios: {
            vocal: "ガイア ⇒ ディル ⇒ 白朮 ⇒ 綾人 ⇒ トーマ ⇒ タル ⇒ ダイン ⇒ 鍾離 ⇒ 一斗",
            rap: "一斗 ⇒ 鍾離 ⇒ タル ⇒ ダイン ⇒ 綾人 ⇒ ディル ⇒ トーマ ⇒ ガイア ⇒ 白朮",
            dance: "ダイン ⇒ タル ⇒ トーマ ⇒ ディル ⇒ 綾人 ⇒ 鍾離 ⇒ 一斗 ⇒ ガイア ⇒ 白朮"
        }
    }
};