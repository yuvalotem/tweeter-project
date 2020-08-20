const Renderer = function () {
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (post of posts) {
            let innerPost = `<div class='post' data-id='${post.id}'><p class="post-text">${post.text}</p>`
            for (let comment of post.comments) {
                innerPost += `<p class ='comments' data-id='${comment.id}'><span class="delete-comment">x </span>${comment.text}</p>`
            }
            innerPost += '<p><input placeholder="Got something to say?"></input><button class="addComment">Comment</button></p> <button class="delete">Delete post</button></div>'
            $('#posts').append(innerPost)
        }
    }
    return renderPosts
}



