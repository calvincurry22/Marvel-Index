import React from "react"
import { Link } from "react-router-dom"
import "./SideNav.css"
import { List, ListItem, ListItemIcon, ListItemText, Icon, SvgIcon } from "@material-ui/core"
import { DropdownToggle } from "reactstrap"


export default ({logout, toggle}) => (
    <div className="sideNavContainer">
        <nav className="sideNav">
            <List>
                <ListItem>
                    <ListItemText>
                        <Link to="/dashboard">My List</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/readComics">View Read Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/comicsExplorer">Explore Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/forum">Forum</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/account" onClick={evt => {
                            toggle()
                        }}>Account</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/" onClick={evt => {
                            logout()
                        }}>Logout</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </div>
)

