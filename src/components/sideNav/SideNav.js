import React from "react"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ComicsExplorer from "../comics/ComicsExplorer"
import Dashboard from "../Dashboard"
import Forum from "../forum/Forum"
import "./SideNav.css"



export default () => (
    <div className="sideNavContainer">
        <nav className="sideNav">
            <Link to="/">MyList</Link>
            <Link to="/comicsExplorer">Explore Comics</Link>
            <Link to="/forum">Forum</Link>
        </nav>
    </div>
)