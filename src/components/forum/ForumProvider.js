import React, { useState, useEffect } from "react"


export const ForumContext = React.createContext()


export const ForumProvider = (props) => {
    const [forumPosts, setForumPosts] = useState([])
    
    const getForumPosts = () => {
        return fetch("http://localhost:8090/forumPosts")
            .then(res => res.json())
            .then(setForumPosts)
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
        console.log("****  CHARACTER APPLICATION STATE CHANGED  ****")
    }, [forumPosts])

    

    return (
        <ForumContext.Provider value={{
            forumPosts, getForumPosts, addForumPost, editForumPost
        }}>
            {props.children}
        </ForumContext.Provider>
    )
}