// Check if the current URL is a Medium article
if (window.location.hostname === 'medium.com' || window.location.hostname.endsWith('.medium.com')) {
    // Increment the article count
    browser.storage.local.get('articleCount').then((result) => {
        const currentCount = result.articleCount || 0;
        browser.storage.local.set({ articleCount: currentCount + 1 });
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
