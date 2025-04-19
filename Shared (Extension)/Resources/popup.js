// Initialize extension state
browser.storage.local.get(['extensionEnabled']).then((result) => {
    const extensionToggle = document.getElementById('extensionToggle');
    extensionToggle.checked = result.extensionEnabled !== false; // Default to enabled if not set
});

// Handle toggle changes
document.getElementById('extensionToggle').addEventListener('change', (event) => {
    const isEnabled = event.target.checked;
    
    // Save the state
    browser.storage.local.set({ extensionEnabled: isEnabled }).then(() => {
        console.log('Extension state updated:', isEnabled);
    });
});

// Get and display the article count
browser.storage.local.get(['articleCount', 'dailyStats']).then((result) => {
    console.log('Storage data:', result);
    const count = result.articleCount || 0;
    document.getElementById('articleCount').textContent = count;
});

// Listen for messages from the extension
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

// Extension popup functionality can be added here if needed
console.log("Unlimited Medium Freedium popup loaded");
