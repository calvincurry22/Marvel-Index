import React from "react"
import { Link } from "react-router-dom"
import "./SideNav.css"
import { List, ListItem, ListItemText } from "@material-ui/core"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default ({logout, toggle}) => (
    <div className="sideNavContainer">
        <nav className="sideNav">
            <List>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/dashboard"><MenuBookIcon className="sideNavIcon" />My List</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/readComics"><LibraryAddCheckIcon className="sideNavIcon" />Read Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/comicsExplorer"><SearchIcon className="sideNavIcon" />Explore Comics</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/forum"><ForumIcon className="sideNavIcon" />Forum</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <div className ="sideNavLinks account" onClick={evt => {
                            toggle()
                        }}><AccountCircleIcon className="sideNavIcon" />Account</div>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link className ="sideNavLinks" to="/" onClick={evt => {
                            logout()
                        }}><ExitToAppIcon className="sideNavIcon" />Logout</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </div>
)

