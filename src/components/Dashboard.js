import React, { useContext } from "react"

import SideNav from "./sideNav/SideNav"
import ComicsExplorer from "./comics/ComicsExplorer"
import Forum from "./forum/Forum"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import ReadingList from "./comics/ReadingList"
import "./comics/CharacterSearchResults.css"
import "./Dashboard.css"
import "./sideNav/SideNav.css"
import ComicsList from "./comics/ComicsList"
import { ButtonAppBar } from "./nav/ButtonAppBar"
import { ForumGroupsProvider } from "./forum/ForumGroupsProvider"
import { UserProvider, UserContext } from "./users/UserProvider"
import AccountEditForm from "./account/AccountEditForm"
import { CharacterProvider } from "./comics/CharacterProvider"
import { ForumProvider } from "./forum/ForumProvider"
import { ReadComicsProvider } from "./comics/ReadComicsProvider"
import ReadComicsList from "./comics/ReadComicsList"






export default ({logout}) => {
    
    return (
        <>
            <div className="mainContainer">
                
                <nav className="headerNav">
                   <h6 className="headerWelcome">Welcome</h6>
                </nav>
                
                <Router>
                    <div className="routerDiv">
                        <SideNav  logout={logout} />
                        <div className="routeContainer">
                            <Switch>
                                <ForumGroupsProvider>
                                    <CharacterProvider>
                                        <ReadComicsProvider>
                                            <ForumProvider>
                                                <UserProvider>
                                                    <Route path="/" exact component={ComicsList} />
                                                    <Route path="/readComics" exact component={ReadComicsList} />
                                                    <Route path="/comicsExplorer" component={ComicsExplorer} />
                                                    <Route path="/forum" component={Forum} />
                                                    <Route path="/account" exact component={AccountEditForm} />
                                                </UserProvider>
                                            </ForumProvider>
                                        </ReadComicsProvider>
                                    </CharacterProvider>
                                </ForumGroupsProvider>
                                <Redirect to="/" />
                            </Switch>                          
                        </div>
                    </div>
                </Router>

            </div>
        </>
    )  
}

