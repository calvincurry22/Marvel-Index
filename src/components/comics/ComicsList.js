import React, { useContext, useState, useEffect } from "react"
import { CharacterContext, CharacterProvider } from "./CharacterProvider"
import UserReadingList from "./UserReadingList"
import { ButtonGroup, Button } from "@material-ui/core"
import ReadComicsList from "./ReadComicsList"
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"
import { Modal, ModalHeader, ModalBody, ModalFooter, ButtonToggle } from "reactstrap"

export default () => {
//   const [readModal, setReadModal] = useState(false)
//   const toggle = setReadModal(!readModal)
    
   
    return (

        <div>
            <h1>My List</h1>
            {/* <button onClick={evt => {

            }}></button> */}
            <div>
                <UserReadingList />
            </div>
            {/* <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <p>Read Comics</p>
                </ModalHeader>
                <ModalBody>
                    <ReadComicsList />
                </ModalBody>
                <ModalFooter>
                    <button onClick={evt => {
                        evt.preventDefault()
                        toggle()
                    }}>Close</button>
                </ModalFooter>
            </Modal> */}
        </div>
    )

}