import React, { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import { ModalHeader, Modal, ModalBody, Button } from "reactstrap"
import "./Auth.css"


export default ({toggle}) => {
    const [signInModal, setSignInModal] = useState(false)
    const toggleSignIn = () => setSignInModal(!signInModal)
    const [registerModal, setRegisterModal] = useState(false)
    const registerToggle = () => setRegisterModal(!registerModal)
    return (
        <>
            <div className="authContainer">
                <Button className="signInButton login"  color="danger" onClick={evt => {
                    toggleSignIn()
                }}>Sign In</Button>
                <Button className="signUpButton login"  color="danger" onClick={evt => {
                    registerToggle()
                }}>Sign Up</Button>
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
            
            <Modal isOpen={registerModal} toggle={registerToggle}>
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
