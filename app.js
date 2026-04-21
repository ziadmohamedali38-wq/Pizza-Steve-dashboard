// Complex Passcode Check
const FOUNDER_CONFIG = {
    key: "Pizza_99_Legacy_!#_8821", // Change this to whatever you want
    salt: "SUPERVISOR_MODE"
};

function verifyFounder() {
    const input = document.getElementById('founder-key').value;
    const statusText = document.querySelector('#legend-overlay p');

    if (input === FOUNDER_CONFIG.key) {
        // Success: Unlock the real-time rank modifier
        document.getElementById('rank-editor-ui').innerHTML = `
            <div class="unlock-msg">FOUNDER ACCESS GRANTED</div>
            <p>Modify Database Ranks:</p>
            <input type="text" id="target-uid" placeholder="User ID">
            <select id="new-rank">
                <option value="LEGEND">LEGEND</option>
                <option value="HEAD_ADMIN">HEAD ADMIN</option>
                <option value="ADMIN_PLUS">ADMIN PLUS</option>
            </select>
            <button onclick="commitRankChange()">PUSH TO DATABASE</button>
        `;
        statusText.style.color = "#00f2ff";
        statusText.innerText = "SYSTEM UNLOCKED";
    } else {
        // Fail
        statusText.style.color = "#ff4444";
        statusText.innerText = "INVALID KEY: ACCESS LOGGED";
    }
}
