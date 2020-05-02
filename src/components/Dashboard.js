import React from "react"

import SideNav from "./sideNav/SideNav"
import ComicsExplorer from "./comics/ComicsExplorer"
import Forum from "./forum/Forum"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ReadingList from "./comics/ReadingList"
import "./comics/CharacterSearchResults.css"
import "./Dashboard.css"
import "./sideNav/SideNav.css"
import ComicsList from "./comics/ComicsList"
import ButtonAppBar from "./nav/Nav"




export default ({logout}) => {
    
    
    return (
    
        <div className="mainContainer">
            
            {/* <nav className="headerNav">
                <h1>Marvel Index</h1>
                
                <button className="logoutButton" onClick={evt => {
                    logout()
                }}>
                    Logout
                </button>
            </nav> */}
            <ButtonAppBar />
            <Router>
                    <div className="routerDiv">
                        <SideNav />
                            <div className="routeContainer">
                                <Switch>
                                    <Route path="/" exact component={ComicsList} />
                                    <Route path="/comicsExplorer" component={ComicsExplorer} />
                                    <Route path="/forum" component={Forum} />
                                </Switch>
                            </div>
                    </div>
            </Router>

        </div>
    )  
}

