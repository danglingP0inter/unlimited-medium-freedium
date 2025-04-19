// Check if the current URL is a Medium article page
const isArticlePage = () => {
    // Check if it's a Medium domain
    if (window.location.hostname !== 'medium.com' && !window.location.hostname.endsWith('.medium.com')) {
        return false;
    }

    // Get the path parts
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    
    // Skip redirection for user-specific pages
    if (pathParts[0] === 'me' || pathParts[0] === 'new-story' || pathParts[0] === 'settings') {
        return false;
    }
    
    // Article URLs can have different formats:
    // 1. /@username/article-slug
    // 2. /publication-name/article-slug
    // 3. /topic/article-slug
    if (pathParts.length < 2) {
        return false;
    }

    // Check if it's a valid article URL by looking for common patterns
    const isAuthorArticle = pathParts[0].startsWith('@');
    const isPublicationArticle = pathParts[0].includes('-');
    const isTopicArticle = pathParts[0].includes('/');
    
    return isAuthorArticle || isPublicationArticle || isTopicArticle;
};

// Function to handle article redirection
const handleArticleRedirect = () => {
    if (isArticlePage()) {
        // Get current date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];
        console.log('Today:', today);
        
        // Increment the article count and daily stats
        browser.storage.local.get(['articleCount', 'dailyStats']).then((result) => {
            console.log('Current storage:', result);
            const currentCount = result.articleCount || 0;
            const dailyStats = result.dailyStats || {};
            
            // Update daily stats
            dailyStats[today] = (dailyStats[today] || 0) + 1;
            console.log('Updated daily stats:', dailyStats);
            
            // Save both total count and daily stats
            browser.storage.local.set({
                articleCount: currentCount + 1,
                dailyStats: dailyStats
            }).then(() => {
                console.log('Storage updated successfully');
            });
        });
        
        // Construct the Freedium URL
        const freediumUrl = `https://freedium.cfd/${window.location.href}`;
        
        // Redirect to Freedium
        window.location.href = freediumUrl;
    }
};

// Check if extension is enabled before handling redirects
const checkAndHandle = () => {
    browser.storage.local.get(['extensionEnabled']).then((result) => {
        if (result.extensionEnabled !== false) { // Default to enabled if not set
            handleArticleRedirect();
        }
    });
};

// Handle initial page load
checkAndHandle();

// Handle navigation events
document.addEventListener('click', (event) => {
    // Find the closest anchor element
    const link = event.target.closest('a');
    if (link && link.href) {
        // Check if the link is a Medium article
        if (link.hostname === 'medium.com' || link.hostname.endsWith('.medium.com')) {
            browser.storage.local.get(['extensionEnabled']).then((result) => {
                if (result.extensionEnabled !== false) { // Default to enabled if not set
                    // Prevent the default navigation
                    event.preventDefault();
                    
                    // Construct the Freedium URL
                    const freediumUrl = `https://freedium.cfd/${link.href}`;
                    
                    // Navigate to Freedium
                    window.location.href = freediumUrl;
                }
            });
        }
    }
}, true);

// Listen for messages from the extension
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});
