import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../users/UserProvider';
import { ForumContext } from './ForumProvider';
import { Card, Collapse, Badge, Button } from 'reactstrap';
import { CardContent, Avatar, List, ListItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export default ({ post, currentUserId, toggle, setSelectedPost }) => {
    const { forumPosts, forumComments, addForumPost, editForumPost, addForumComment, postLikes, addLikeToPost, removeLikeFromPost } = useContext(ForumContext)
    const currentPostLikes = postLikes.filter(likes => likes.postId === post.id)
    const { users } = useContext(UserContext)
    const foundUser = users.find(user => user.id === post.userId)
    const postDate = new Date(post.date)
    const convertedDate = postDate.toLocaleString()
    const [isLiked, setIsLiked] = useState()
    const [commentsOpen, setCommentsOpen] = useState(false)
    const toggleLike = () => setIsLiked(!isLiked)
    const toggleComments = () => setCommentsOpen(!commentsOpen)
    const postComments = forumComments.filter(posts => posts.postId === post.id)

    const verifyUserLikedPost = () => {
        const postLikeCheck = currentPostLikes.find(pl => pl.userId === currentUserId)
        if (postLikeCheck) {
            removeLikeFromPost(postLikeCheck.id)
        } else {
            addLikeToPost({
                userId: currentUserId,
                postId: post.id
            })
        }
    }

    const reply = useRef()

    const createComment = (user, post) => {
        addForumComment({
            message: reply.current.value,
            image: user.userImage,
            userId: user.id,
            postId: post.id
        })
            .then(() => reply.current.value = null)
    }

    return (
        <>
            <Card key={post.id} className="forumPost">
                <CardContent className="postContent">
                    <div className="avatarHeader">
                        <Avatar className="userAvatar" src={foundUser.userImage} />
                        <p className="postHeader">{foundUser.userName}</p>
                        {
                            (post.userId === currentUserId) ? (

                                <EditIcon fontSize="small" className="editPostIcon" onClick={evt => {
                                    setSelectedPost(post)
                                    toggle()
                                }} />) : <div></div>

                        }
                    </div>
                    <p className="postDate">{convertedDate}</p>
                    <div className="postDateMessage">
                        <p className="postMessage">{post.message}</p>
                    </div>
                </CardContent>
            </Card>
            <div>
                <div className="postUtilities">
                    <p className="postLike" onClick={() => {
                        verifyUserLikedPost()
                    }}
                    >
                        Like
                    </p>
                    <Badge className="postBadge Likes" color="danger">
                        {(currentPostLikes.length > 0) ? currentPostLikes.length : ''}
                    </Badge>
                    <p className="postCommentsButton" onClick={toggleComments}>
                        Comments
                        <Badge className="postBadge Comments">
                            {(postComments.length > 0) ? postComments.length : ""}
                        </Badge>
                    </p>
                </div>
                <Collapse isOpen={commentsOpen}>
                    <fieldset className="postReplyFieldset">
                        <input className="postReplyInput" type="text" ref={reply} name="message" />
                        <Button
                            className="postSaveReplyButton"
                            onClick={(e) => {
                                e.preventDefault()
                                console.log(reply.current.value)
                                createComment(foundUser, post)
                            }}
                        >
                            Reply
                        </Button>
                    </fieldset>
                    <List className="postCommentsList">
                        {postComments &&
                            postComments.map(comment => {
                                const commentAuthor = users.find(user => user.id === comment.userId)
                                return (
                                    <ListItem className="commentMessageContainer">
                                        <Avatar className="commentAvatar" src={commentAuthor.userImage}></Avatar>
                                        <div className="commentMessage"><strong>{commentAuthor.name}</strong> {comment.message}</div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Collapse>
            </div>
        </>
    )
}