import React, { useState, useEffect } from "react"


export const ForumContext = React.createContext()


export const ForumProvider = (props) => {
    const [forumPosts, setForumPosts] = useState([])
    const [forumComments, setForumComments] = useState([])
    const [postLikes, setPostLikes] = useState([])

    const getForumPosts = () => {
        return fetch("http://localhost:8090/forumPosts")
            .then(res => res.json())
            .then(setForumPosts)
    }

    const getForumComments = () => {
        return fetch("http://localhost:8090/forumComments")
            .then(res => res.json())
            .then(setForumComments)
    }

    const getPostLikes = () => {
        return fetch("http://localhost:8090/postLikes")
            .then(res => res.json())
            .then(setPostLikes)
    }

    const addLikeToPost = (likeObj) => {
        return fetch("http://localhost:8090/postLikes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeObj)
        })
            .then(getPostLikes)
    }

    const removeLikeFromPost = (id) => {
        return fetch(`http://localhost:8090/postLikes/${id}`, {
            method: "DELETE"
        })
            .then(getPostLikes)
    }
    const addForumPost = post => {
        return fetch("http://localhost:8090/forumPosts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getForumPosts)
    }

    const addForumComment = comment => {
        return fetch("http://localhost:8090/forumComments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getForumPosts)
            .then(getForumComments)
    }

    const editForumPost = forumPost => {
        return fetch(`http://localhost:8090/forumPosts/${forumPost.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(forumPost)
        })
            .then(getForumPosts)
    }



    /*
        Load all characters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getForumPosts()
    }, [])

    useEffect(() => {
        getPostLikes()
    }, [])


    useEffect(() => {
        console.log("****  CHARACTER APPLICATION STATE CHANGED  ****")
    }, [forumPosts])

    useEffect(() => {
        getForumComments()
    }, [])

    return (
        <ForumContext.Provider value={{
            forumPosts, forumComments, getForumPosts, addForumPost, editForumPost, addForumComment, postLikes, getPostLikes, addLikeToPost, removeLikeFromPost
        }}>
            {props.children}
        </ForumContext.Provider>
    )
}