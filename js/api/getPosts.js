async function fetchWordPressPosts() {
    const response = await fetch('http://localhost/backend/wp-json/wp/v2/posts');
    const posts = await response.json();
    console.log(posts);
    return posts;
}

function displayPosts(posts) {
    const container = document.getElementById('posts-inner');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2 className="title">${post.title.rendered}</h2>
            <div className="content">${post.content.rendered}</div>
        `;
        container.appendChild(postElement);
    });
}

async function init() {
    const posts = await fetchWordPressPosts();
    displayPosts(posts);
}

document.addEventListener('DOMContentLoaded', init);