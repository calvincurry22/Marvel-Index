import React, { useContext, useRef, useState } from "react"
import { UserContext } from "../users/UserProvider"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import { Card, CardContent, Avatar } from "@material-ui/core"
import { ForumContext } from "./ForumProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import EditIcon from '@material-ui/icons/Edit'
import PostEditForm from "./PostEditForm"

export default ({forumGroupId}) => {
    const { users } = useContext(UserContext)
    const { forumGroups } = useContext(ForumGroupsContext)
    const { forumPosts, addForumPost, editForumPost } = useContext(ForumContext)
    const foundGroup = forumGroups.find(group => group.id === forumGroupId)
    const groupPosts = forumPosts.filter(posts => posts.forumId === foundGroup.id)
    const sortedGroupPosts = groupPosts.sort((a, b) => b.date - a.date)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const [selectedPost, setSelectedPost] = useState({postObj: {id:0}})
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const text = useRef()
   

    return (
        <div className="forumPostContainer">
            <div className="forumPosts">
            <h3 className="forumTopicHeader">{foundGroup.name}</h3>
                {                   
                    sortedGroupPosts.map(post => {
                        const foundUser = users.find(user => user.id === post.userId)
                        const postDate = new Date(post.date)
                        const convertedDate = postDate.toLocaleString()
                        return (
                            <Card className="forumPost">
                                <CardContent className="postContent">
                                    <div className="avatarHeader">
                                        <Avatar className="userAvatar" src={foundUser.userImage} />
                                        <p className="postHeader">{foundUser.userName}</p>
                                        <EditIcon fontSize="small" className="editPostIcon" onClick={evt => {
                                            setSelectedPost(post)
                                            toggle()
                                        }} />
                                    </div>
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
            <fieldset className="postMessageContainer">
                <textarea className="textarea" placeholder="Type message here..." rows="4" cols="50" ref={text}/>
                <Button className="postButton" onClick={evt => {
                    addForumPost({
                        userId: currentUserId,
                        message: text.current.value,
                        forumId: foundGroup.id,
                        date: Date.now()
                    })
                }}>Post Message</Button>
            </fieldset>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Edit Post
                </ModalHeader>
                <ModalBody>
                    <PostEditForm key={selectedPost.id} selectedPost={selectedPost} editForumPost={editForumPost} toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>
    )
}