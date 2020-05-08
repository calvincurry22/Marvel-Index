import React, { useContext, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import { Card, CardContent } from "@material-ui/core"
import { ForumContext } from "./ForumProvider"
import { Button } from "reactstrap"

export default ({forumGroupId}) => {
    const { users } = useContext(UserContext)
    const { forumGroups } = useContext(ForumGroupsContext)
    const { forumPosts, addForumPost } = useContext(ForumContext)
    const foundGroup = forumGroups.find(group => group.id === forumGroupId)
    const groupPosts = forumPosts.filter(posts => posts.forumId === foundGroup.id)
    const sortedGroupPosts = groupPosts.sort((a, b) => b.date - a.date)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const text = useRef()
   

    return (
        <div className="forumPostContainer">
            <fieldset className="postMessageContainer">
                <textarea placeholder="type message here..." rows="4" cols="50" ref={text}/>
                <Button className="postButton" onClick={evt => {
                    addForumPost({
                        userId: currentUserId,
                        message: text.current.value,
                        forumId: foundGroup.id,
                        date: Date.now()
                    })
                }}>Post Message</Button>
            </fieldset>
            <h3>{foundGroup.name}</h3>
            <div className="forumPosts">
                {                   
                    sortedGroupPosts.map(post => {
                        const foundUser = users.find(user => user.id === post.userId)
                        const postDate = new Date(post.date)
                        const convertedDate = postDate.toLocaleString()
                        return (
                            <Card className="forumPost">
                                <CardContent className="postContent">
                                    <p className="postHeader">{foundUser.userName}</p>
                                    <p className="postDate">{convertedDate}</p>
                                    <div className="postDateMessage">
                                        <p className="postMessage">{post.message}</p>
                                    </div>
                                </CardContent>
                            </Card> 
                        )
                    })
                }
            </div>
        </div>
    )
}