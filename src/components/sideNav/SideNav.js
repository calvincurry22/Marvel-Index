import React from "react"
import { Link } from "react-router-dom"
import "./SideNav.css"
import { List, ListItem, ListItemIcon, ListItemText, Icon, SvgIcon } from "@material-ui/core"


export default () => (
    <div className="sideNavContainer">
        <nav className="sideNav">
            <List>
                <ListItem>
                    <ListItemText>
                        <Link to="/">My List</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link to="/readComics">Read Comics</Link>
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
                        <Link to="/account">Account</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </div>
)

