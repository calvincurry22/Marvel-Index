import React, { useContext } from "react"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import "./Forum.css"

export default ({setForumGroupId}) => {
    const { forumGroups } = useContext(ForumGroupsContext)

    return (
        <div>
            {
                forumGroups.map(group => {
                    return (
                        <h5 onClick={evt => {
                                setForumGroupId(group.id)
                        }}className="fakeLink href">{group.name}</h5>
                    )
                })
            }
        </div>
    )
}