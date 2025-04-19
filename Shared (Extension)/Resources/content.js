// Check if the current URL is a Medium article page
const isArticlePage = () => {
    // Check if it's a Medium domain
    if (window.location.hostname !== 'medium.com' && !window.location.hostname.endsWith('.medium.com')) {
        return false;
    }

    // Get the path parts
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    
    // Article URLs typically have at least 3 parts: @username, article-slug, and optional query params
    // Example: /@username/article-slug
    if (pathParts.length < 2) {
        return false;
    }

    // Check if the first part starts with @ (author handle)
    if (!pathParts[0].startsWith('@')) {
        return false;
    }

    return true;
};

if (isArticlePage()) {
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
