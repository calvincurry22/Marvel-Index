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
                        <Link className ="sideNavLinks" to="/dashboard">My List</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/readComics">View Read Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/comicsExplorer">Explore Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/forum">Forum</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" onClick={evt => {
                            toggle()
                        }}>Account</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/" onClick={evt => {
                            logout()
                        }}>Logout</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </div>
)

