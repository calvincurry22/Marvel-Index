import React, { useContext, useState } from "react"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import { DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from "@material-ui/core";
import "./Forum.css"

export default ({setForumGroupId}) => {
    const { forumGroups } = useContext(ForumGroupsContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (  
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Choose A Topic
            </DropdownToggle>
            <DropdownMenu className="forumDropdownMenu">
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