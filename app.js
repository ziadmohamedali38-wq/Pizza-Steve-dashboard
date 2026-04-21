const COMPLEX_PASS = "pizza1!7052";

function showSection(sectionId) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.add('hidden'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');
}

function verifyFounder() {
    const input = document.getElementById('founder-key').value;
    const msg = document.getElementById('lock-msg');

    if (input === COMPLEX_PASS) {
        showSection('legend-controls');
        document.getElementById('rank-editor-ui').innerHTML = `
            <div class="admin-box">
                <p>REAL-TIME RANK OVERRIDE</p>
                <input type="text" id="target-user" placeholder="Member Name" class="admin-input">
                <select id="rank-select" class="admin-input">
                    <option value="LEGEND">LEGEND</option>
                    <option value="HEAD_ADMIN">HEAD ADMIN</option>
                    <option value="ADMIN_PLUS">ADMIN PLUS</option>
                    <option value="MEMBER_PLUS">MEMBER PLUS</option>
                    <option value="MEMBER">MEMBER</option>
                </select>
                <button onclick="commitChanges()" class="commit-btn">PUSH CHANGES</button>
            </div>
        `;
    } else {
        msg.innerText = "ACCESS DENIED: LOGGING ATTEMPT";
        msg.style.color = "#ff4444";
        document.getElementById('founder-key').value = "";
    }
}

function commitChanges() {
    const user = document.getElementById('target-user').value;
    const rank = document.getElementById('rank-select').value;
    
    // Calls the function from whatsapp-api.js
    broadcastRankUpdate(user, rank);
    
    alert(`Success: ${user} is now ${rank}. WhatsApp notified.`);
}
