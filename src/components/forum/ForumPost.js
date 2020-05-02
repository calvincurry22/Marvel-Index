import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import { Card, CardContent } from "@material-ui/core"

export default ({post}) => {
    const { users } = useContext(UserContext)
    const foundUser = users.find(user => user.id === post.userId)

    return (
        <div>
           <Card>
                <CardContent>
                    <h5>{foundUser.userName}</h5>
                    <p>{post.message}</p>
                </CardContent>
            </Card> 
        </div>
    )
    

}