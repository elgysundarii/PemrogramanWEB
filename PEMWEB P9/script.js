// script.js
function handleAddLink() {
    alert("Add link functionality is not implemented yet.");
}

function handleGenerateLink() {
    alert("Meeting link generated: https://meet.example.com/abc-defg-hij");
}

document.querySelector('.post-comment-btn').addEventListener('click', function () {
    const commentInput = document.querySelector('.comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const content = document.querySelector('.content');
        const newComment = document.createElement('div');
        newComment.classList.add('card');
        newComment.innerHTML = `
            <p><strong>You</strong> - Just now</p>
            <div class="post">
                <p>${commentText}</p>
            </div>
        `;
        content.insertBefore(newComment, document.querySelector('.comment-section'));
        commentInput.value = ''; // Clear the input field
    }
});
