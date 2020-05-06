import React, { useContext, useState } from "react"

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
import Auth from "./auth/Auth"
import { Modal, ModalBody, ModalHeader } from "reactstrap"






export default ({logout}) => {
    const [accountModal, setAccountModal] = useState(false)
    const toggleAccount = () => setAccountModal(!accountModal)
    
    return (
        <>
            <div className="mainContainer">
                
                <nav className="headerNav">
                   <h6 className="headerWelcome">Welcome</h6>
                </nav>
                
                <Router>
                    <div className="routerDiv">
                        <SideNav  logout={logout} toggle={toggleAccount}/>
                        <div className="routeContainer">
                            <Switch>
                                <ForumGroupsProvider>
                                    <CharacterProvider>
                                        <ReadComicsProvider>
                                            <ForumProvider>
                                                <UserProvider>
                                                    <Route path="/" exact  component={Auth} />
                                                    <Route path="/dashboard" exact component={ComicsList} />
                                                    <Route path="/readComics" exact component={ReadComicsList} />
                                                    <Route path="/comicsExplorer" exact component={ComicsExplorer} />
                                                    <Route path="/forum" exact component={Forum} />
                                                    <Modal isOpen={accountModal} toggle={toggleAccount}>
                                                        <ModalHeader toggle={toggleAccount}>
                                                            <h2>Account Info</h2>
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <Route path="/account" exact
                                                                render={ () => <AccountEditForm  toggle={toggleAccount}/>}
                                                            />
                                                        </ModalBody>
                                                    </Modal>
                                                </UserProvider>
                                            </ForumProvider>
                                        </ReadComicsProvider>
                                    </CharacterProvider>
                                </ForumGroupsProvider>
                            </Switch>                          
                            <Redirect to="/dashboard" />
                        </div>
                    </div>
                </Router>

            </div>
        </>
    )  
}

