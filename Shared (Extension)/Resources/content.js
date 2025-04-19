// Check if the current URL is a Medium article
if (window.location.hostname === 'medium.com' || window.location.hostname.endsWith('.medium.com')) {
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Increment the article count and daily stats
    browser.storage.local.get(['articleCount', 'dailyStats']).then((result) => {
        const currentCount = result.articleCount || 0;
        const dailyStats = result.dailyStats || {};
        
        // Update daily stats
        dailyStats[today] = (dailyStats[today] || 0) + 1;
        
        // Save both total count and daily stats
        browser.storage.local.set({
            articleCount: currentCount + 1,
            dailyStats: dailyStats
        });
    });
    
    // Construct the Freedium URL
    const freediumUrl = `https://freedium.cfd/${window.location.href}`;
    
    // Redirect to Freedium
    window.location.href = freediumUrl;
}

// Listen for messages from the extension
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});
