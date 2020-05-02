import React, { useContext, useRef, useState, useEffect } from "react"
import { ForumContext } from "./ForumProvider"
import ForumPost from "./ForumPost"
import { Button } from "reactstrap"


export default () => {
    const { forumPosts } = useContext(ForumContext)
    const { addForumPost } = useContext(ForumContext)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const text = useRef()
    const sortedForumPosts = forumPosts.sort((a, b) => b.date - a.date)
        
    console.log(sortedForumPosts)
        
    return (
        <div>

            <fieldset className="postMessageContainer">
                <textarea placeholder="type comment here..." rows="4" cols="50" ref={text}/>
                <Button className="postButton" onClick={evt => {
                    addForumPost({
                        userId: currentUserId,
                        message: text.current.value,
                        date: Date.now()
                    })
                }}>Post Message</Button>
            </fieldset>
            
            <div className="postContainer">
                
                {
                    sortedForumPosts.map(post => {
                        return <ForumPost post={post} />
                    })
                }
                
            </div>
        </div>

    )
    

}