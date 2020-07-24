import React, { useContext, useRef, useState } from "react"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import { ForumContext } from "./ForumProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

import PostEditForm from "./PostEditForm"
import PostList from "./PostList"

export default ({ forumGroupId }) => {

    const { forumGroups } = useContext(ForumGroupsContext)
    const { forumPosts, addForumPost, editForumPost } = useContext(ForumContext)
    const [selectedPost, setSelectedPost] = useState({ postObj: { id: 0 } })
    const foundGroup = forumGroups.find(group => group.id === forumGroupId)
    const groupPosts = forumPosts.filter(posts => posts.forumId === foundGroup.id)
    const sortedGroupPosts = groupPosts.sort((a, b) => b.date - a.date)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const text = useRef()

    const clearText = () => {
        text.current.value = null
    }

    return (
        <div className="forumPostContainer">
            <div className="forumPosts">
                <h3 className="forumTopicHeader">{foundGroup.name}</h3>
                {
                    sortedGroupPosts.map(post => {
                        return <PostList key={post.id} post={post} currentUserId={currentUserId} toggle={toggle} setSelectedPost={setSelectedPost} />
                    })
                }
            </div>
            <fieldset className="postMessageContainer">
                <textarea className="textarea" placeholder="Type message here..." rows="4" cols="50" ref={text} />
                <Button className="postButton" onClick={evt => {
                    if (text.current.value === "") {
                        return null;
                    } else {
                        addForumPost({
                            userId: currentUserId,
                            message: text.current.value,
                            forumId: foundGroup.id,
                            date: Date.now(),
                            likes: 0
                        })
                        clearText()
                    }
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