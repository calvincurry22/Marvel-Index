import React, { useContext, useState } from "react"
import { Button, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, ButtonDropdown } from "reactstrap"
import SideNav from "./components/sideNav/SideNav"
import ComicsExplorer from "./components/comics/ComicsExplorer"
import Forum from "./components/forum/Forum"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ReadingList from "./components/comics/ReadingList"
import { UserContext } from "./components/users/UserProvider"
import "./Dashboard.css"
import "./components/sideNav/SideNav.css"



export default ({logout}) => {
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const [dropdownOpen, setOpen] = useState(false)  
    const toggle = () => setOpen(!dropdownOpen)
    return (
    
        <div className="container">
            
            <nav className="headerNav">
                <h1>Marvel Index</h1>
                <button className="logoutButton" onClick={evt => {
                    logout()
                }}>
                    Logout
                </button>
            </nav>
            
            <Router>
                    <div className="routerDiv">
                        <SideNav />
                            <div className="routeContainer">
                                <Switch>
                                    <Route path="/" exact component={ReadingList} />
                                    <Route path="/comicsExplorer" component={ComicsExplorer} />
                                    <Route path="/forum" component={Forum} />
                                </Switch>
                            </div>
                    </div>
            </Router>

        </div>
    )  
}

