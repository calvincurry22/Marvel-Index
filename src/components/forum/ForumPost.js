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
           <Card>
                <CardContent>
                    <h5>{foundUser.userName}</h5>
                    <p>{convertedDate}</p>
                    <p>{post.message}</p>
                </CardContent>
            </Card> 
        </div>
    )
    

}