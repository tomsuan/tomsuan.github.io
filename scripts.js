document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/recent-post') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            const recentPostSection = document.getElementById('recent-post');
            recentPostSection.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.excerpt}</p>
                <a href="${data.url}">Read more</a>
            `;
        })
        .catch(error => console.error('Error fetching recent post:', error));
});
