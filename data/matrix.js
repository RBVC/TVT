/* --- START OF FILE data/matrix.js --- */
// matrix.js - Affiliation Matrix Generation Logic

/**
 * マトリックス表を生成する関数
 * 各グループファイルが読み込まれた後に実行されます
 */
function initAffiliationMatrix() {
    const mHead = document.getElementById('matrix-header');
    const mBody = document.getElementById('matrix-body');
    if (!mHead || !mBody) return;

    // ヘッダー行のリセット（グループ名列）
    const headerRow = mHead.rows[0];
    headerRow.innerHTML = '<th style="background:#f0f0f0">グループ名</th>';

    // レーベルごとの列を作成
    Object.keys(labels).forEach(k => {
        const label = labels[k];
        headerRow.innerHTML += `
            <th>
                <span class="matrix-label">${label.name.replace(' ', '<br>')}</span>
                <span class="matrix-ceo">${label.ceo}</span>
            </th>`;
    });

    // 各グループの行を作成
    mBody.innerHTML = ''; // 初期化
    Object.keys(allGroups).forEach(gk => {
        const g = allGroups[gk];
        let row = `<tr><td class="font-bold" style="background:#fdfdfd">${g.name}</td>`;
        
        Object.keys(labels).forEach(lk => {
            // レーベルと一致し、かつ元メンバーではない人を抽出
            const mems = g.members
                .filter(m => m.label === lk && !m.isFormer)
                .map(m => m.name)
                .join('<br>');
            row += `<td>${mems || '-'}</td>`;
        });
        mBody.innerHTML += row + '</tr>';
    });
}