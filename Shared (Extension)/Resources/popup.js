// Get and display the article count
browser.storage.local.get(['articleCount', 'dailyStats']).then((result) => {
    const count = result.articleCount || 0;
    document.getElementById('articleCount').textContent = count;

    // Get daily stats or initialize if not present
    const dailyStats = result.dailyStats || {};
    
    // Get last 7 days
    const last7Days = Array.from({length: 7}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split('T')[0];
    }).reverse();

    // Prepare data for chart
    const labels = last7Days.map(date => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { weekday: 'short' });
    });

    const data = last7Days.map(date => dailyStats[date] || 0);

    // Create chart
    const ctx = document.getElementById('dailyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Articles Read',
                data: data,
                backgroundColor: '#2196F3',
                borderColor: '#1976D2',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

// Extension popup functionality can be added here if needed
console.log("Unlimited Medium Freedium popup loaded");
