const COMPLEX_PASS = "Pizza_99_Legacy_!#_8821";

function showSection(sectionId) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.add('hidden'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');
}

function openLegendMenu() {
    document.getElementById('legend-overlay').classList.remove('hidden');
}

function closeLegendMenu() {
    document.getElementById('legend-overlay').classList.add('hidden');
    document.getElementById('founder-key').value = "";
    document.getElementById('rank-editor-ui').classList.add('hidden');
    document.getElementById('lock-msg').innerText = "Enter founder passcode.";
}

function verifyFounder() {
    const input = document.getElementById('founder-key').value;
    const msg = document.getElementById('lock-msg');
    const editor = document.getElementById('rank-editor-ui');

    if (input === COMPLEX_PASS) {
        msg.innerText = "FOUNDER ACCESS GRANTED";
        msg.style.color = "#00f2ff";
        document.getElementById('founder-key').classList.add('hidden');
        editor.classList.remove('hidden');
        
        editor.innerHTML = `
            <div style="margin-top:20px;">
                <input type="text" id="target-user" placeholder="User Name" class="admin-input">
                <select id="rank-select" class="admin-input">
                    <option value="LEGEND">LEGEND</option>
                    <option value="HEAD_ADMIN">HEAD ADMIN</option>
                    <option value="ADMIN_PLUS">ADMIN PLUS</option>
                </select>
                <button onclick="pushRankUpdate()" style="width:100%; background:var(--gold); color:black; margin-top:10px;">UPDATE DATABASE</button>
            </div>
        `;
    } else {
        msg.innerText = "UNAUTHORIZED ACCESS";
        msg.style.color = "#ff4444";
    }
}

function pushRankUpdate() {
    const user = document.getElementById('target-user').value;
    const rank = document.getElementById('rank-select').value;
    
    // CALL THE NEW API FILE
    console.log("Connecting to firebase-config.js...");
    sendWhatsAppNotification(user, rank); // This comes from the other file!
    alert(`Real-time Sync: ${user} set to ${rank}`);
}
