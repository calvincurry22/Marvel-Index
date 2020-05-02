import React, { useContext, useRef } from "react"
import { ForumContext } from "./ForumProvider"
import ForumPost from "./ForumPost"
import { Button } from "reactstrap"


export default () => {
    const { forumPosts } = useContext(ForumContext)
    const { addForumPost } = useContext(ForumContext)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const text = useRef()
    

    return (
        <div>

            <fieldset>
                <input type="file" />
                <input className="forumTextArea" placeholder="type comment" type="textarea" ref={text} />
                <Button onClick={evt => {
                    addForumPost({
                        userId: currentUserId,
                        message: text.current.value
                    })
                }}>Post Message</Button>
            </fieldset>
            
            <div className="postContainer">
                
                {
                    forumPosts.map(post => {
                        return <ForumPost post={post} />
                    })
                }
                
            </div>
        </div>

    )
    

}