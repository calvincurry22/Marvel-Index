import React, { useState } from "react"
import { Button } from "reactstrap"

export default ({ selectedPost, editForumPost, toggle }) => {
    const [updatedPost, setUpdatedPost] = useState(selectedPost)

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, updatedPost)
        newPost[event.target.name] = event.target.value
        setUpdatedPost(newPost)
    }


    return (
        <div className="postEditFormBody">
            <textarea 
                className="postEditTextarea"
                defaultValue={selectedPost.message}
                name="message"
                onChange={handleControlledInputChange}
            >
            </textarea>
            <Button onClick={evt => {
                editForumPost(updatedPost)
                toggle()
            }}>Update Post</Button>
        </div>
    )
}