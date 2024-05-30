document.addEventListener('DOMContentLoaded', function() {
    // Fetch the most recent blog post
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

    // Fetch the latest tweets
    fetch('https://api.twitter.com/2/tweets?ids=your_tweet_ids') // Replace with your Twitter API endpoint
        .then(response => response.json())
        .then(data => {
            const twitterFeed = document.getElementById('twitter-feed');
            data.data.forEach(tweet => {
                const tweetElement = document.createElement('div');
                tweetElement.innerHTML = `
                    <p>${tweet.text}</p>
                    <a href="https://twitter.com/your_username/status/${tweet.id}">View on Twitter</a>
                `;
                twitterFeed.appendChild(tweetElement);
            });
        })
        .catch(error => console.error('Error fetching tweets:', error));
});
