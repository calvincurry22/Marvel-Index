import React, { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import "./Auth.css"
import { Button } from "@material-ui/core"
import { ModalHeader, Modal, ModalBody } from "reactstrap"


export default ({toggle}) => {
    const [signInModal, setSignInModal] = useState(false)
    const toggleSignIn = () => setSignInModal(!signInModal)
    const [registerModal, setRegisterModal] = useState(false)
    const registerToggle = () => setRegisterModal(!registerModal)
    return (
        <>
            <div className="authContainer">
                <button className="signInButton login" onClick={evt => {
                    toggleSignIn()
                }}>Sign In</button>
                <button className="signUpButton login" onClick={evt => {
                    registerToggle()
                }}>Sign Up</button>
            </div>
                
                
            <div className="authModalContainer">
            <Modal isOpen={signInModal} toggle={toggleSignIn}>
                <ModalHeader toggle={toggleSignIn}>
                    <h4>Login</h4>
                </ModalHeader>
                <ModalBody>
                    <Login toggle={toggle} />
                </ModalBody>
            </Modal>
            
            <Modal isopen={registerModal} toggle={registerToggle}>
                <ModalHeader toggle={registerToggle}>
                    <h4>Sign Up</h4>
                </ModalHeader>
                <ModalBody>
                    <Register toggle={toggle} />
                </ModalBody>
            </Modal>
            </div>
        </>
    )
}
