const Tweeter = function () {
    let posts = [ //our posts array
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 3 //count our post for id
    let commentIdCounter = 7 //count our comments for id
    const getPosts = () => posts //returns our posts array
    const addPost = (txt) => { //gets text and add post 
        posts.push({ text: txt, id: 'p' + postIdCounter, comments:[] })
        postIdCounter++
    }
    const removePost = (postID) => { //get post id and removes it
        for (let i in posts) {
            if (posts[i].id == postID) {
                posts.splice(i, 1)
            }
        }
    }
    const addComment = function (postID, txt) { // get post id and text and comment the text on the post
        for (let i in posts) {
            if (posts[i].id == postID) {
                posts[i].comments.push({id: "c" + commentIdCounter, text: txt })
                commentIdCounter++
            }
        }
    }
    const removeComment = function (postID, commentID) { //get post id and comment id and removes this comment
        for (let i in posts) {
            if (posts[i].id == postID) {
                for (let j in posts[i].comments) {
                    if (posts[i].comments[j].id === commentID) {
                        posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }
    return { getPosts, addPost, removePost, addComment, removeComment } //return al our functions
}



