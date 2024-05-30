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
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/blog-posts') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            const blogListSection = document.getElementById('blog-list');
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}">Read more</a>
                `;
                blogListSection.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});
