const tweeter = Tweeter()
const renderer = Renderer()
renderer(tweeter.getPosts())

$('#post').click(function () { //when twit button is pressed
    let twit = $('input').val()
    if (twit != '') {
        $('input').val('')
        tweeter.addPost(twit)
        renderer(tweeter.getPosts())
    }
})

$('#posts').on('click', '.delete', function () { //when delete post button is pressed
    let id = $(this).closest('.post').data().id
    tweeter.removePost(id)
    renderer(tweeter.getPosts())
})

$('#posts').on('click', '.addComment', function () { //when comment post button is pressed
    let postId = $(this).closest('.post').data().id
    let text = $(this).closest('p').find('input').val()
    if (text != '') {
        tweeter.addComment(postId, text)
        renderer(tweeter.getPosts())
    }
})

$('#posts').on('click', '.delete-comment', function () { //when delete comment button is pressed
    let postId = $(this).closest('.post').data().id
    let commentId = $(this).closest('p').data().id
    tweeter.removeComment(postId, commentId)
    renderer(tweeter.getPosts())
})