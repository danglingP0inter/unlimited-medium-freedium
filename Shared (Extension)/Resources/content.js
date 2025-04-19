// Check if the current URL is a Medium article
if (window.location.hostname === 'medium.com' || window.location.hostname.endsWith('.medium.com')) {
    // Construct the Freedium URL
    const freediumUrl = `https://freedium.cfd/${window.location.href}`;
    
    // Redirect to Freedium
    window.location.href = freediumUrl;
}

// Listen for messages from the extension
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});
