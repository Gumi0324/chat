document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        addPost(message);
        messageInput.value = ''; // Clear input after posting
    }
});

function addPost(message) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = message;
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.appendChild(postElement);
}
