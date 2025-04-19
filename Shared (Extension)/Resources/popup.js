// Get and display the article count
browser.storage.local.get('articleCount').then((result) => {
    const count = result.articleCount || 0;
    document.getElementById('articleCount').textContent = count;
});

// Extension popup functionality can be added here if needed
console.log("Unlimited Medium Freedium popup loaded");
