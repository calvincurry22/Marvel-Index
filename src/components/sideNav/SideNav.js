import React from "react"
import { Link } from "react-router-dom"
import "./SideNav.css"



export default () => (
    <div className="sideNavContainer">
        <nav className="sideNav">
            <Link to="/">MyList</Link>
            <Link to="/comicsExplorer">Explore Comics</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/account">Account</Link>
        </nav>
    </div>
)