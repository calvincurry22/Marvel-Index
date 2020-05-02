import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import { Card, CardContent } from "@material-ui/core"

export default ({post}) => {
    const { users } = useContext(UserContext)
    const foundUser = users.find(user => user.id === post.userId)
    const postDate = new Date(post.date)
    const convertedDate = postDate.toLocaleString()
   

    return (
        <div>
           <Card className="forumPost">
                <CardContent className="postContent">
                    <p className="postHeader">{foundUser.userName}</p>
                    <p className="postDate">{convertedDate}</p>
                    <div className="postDateMessage">
                        <p className="postMessage">{post.message}</p>
                    </div>
                </CardContent>
            </Card> 
        </div>
    )
    

}