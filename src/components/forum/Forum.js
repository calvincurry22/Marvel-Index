import React from "react"
import ForumPage from "./ForumPage"
import { ForumProvider } from "./ForumProvider"
import { UserProvider } from "../users/UserProvider"
import "./Forum.css"
export default () => (
    <div>
    <h1>Forum</h1>
    <ForumProvider>
        <UserProvider>

            <ForumPage />
        </UserProvider>
        

    </ForumProvider>
    </div>
)