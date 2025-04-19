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
