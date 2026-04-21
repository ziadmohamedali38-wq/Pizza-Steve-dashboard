// Initialize Firebase (Assuming your config is set)
const db = firebase.database();

// The "Legend" Rank Modifier Logic
async function updatePlayerRank(userId, newRank) {
    const legendPass = document.getElementById('passcode').value;
    
    // Server-side check is better, but for the UI:
    if (legendPass === "YOUR_FOUNDER_KEY") {
        await db.ref('users/' + userId).update({
            rank: newRank,
            lastModifiedBy: "Legacy_User"
        });
        
        // Trigger WhatsApp Notification
        sendWhatsAppAlert(userId, newRank);
    } else {
        alert("ACCESS DENIED: LEGACY STATUS REQUIRED");
    }
}
