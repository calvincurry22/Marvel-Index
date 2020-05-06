import React, { useContext, useState } from "react"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import "./Forum.css"
import { DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

export default ({setForumGroupId}) => {
    const { forumGroups } = useContext(ForumGroupsContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (  
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Dropdown
            </DropdownToggle>
            <DropdownMenu>
            {
                forumGroups.map( group => {
                    return (
                        <DropdownItem className="fakeLink href" onClick={evt => {
                            setForumGroupId(group.id)
                        }}>{group.name}</DropdownItem>
                    )
                })
            }
            </DropdownMenu>
        </Dropdown>
    )
}