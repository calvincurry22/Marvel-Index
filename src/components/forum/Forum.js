import React, { useState, useRef, useEffect, useContext } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"
import { ForumGroupsContext } from "./ForumGroupsProvider"
import ForumGroupList from "./ForumGroupList"
import ForumPostList from "./ForumPostList"
import "./Forum.css"



export default () => {
   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)
   const name = useRef()
   const { addForumGroup } = useContext(ForumGroupsContext)
   const [forumGroupId, setForumGroupId] = useState(1)
   const [component, setComponent] = useState()

   const showForumPostsList = () => {
        return <ForumPostList forumGroupId={forumGroupId} />
   }

   useEffect( () => {
    if(forumGroupId) {
        setComponent(showForumPostsList)
    }
   }, [forumGroupId])


    return (
        <>
            <div className="forumPageContainer">
                <h1 className="forumPageHeader">Forum</h1>
                <div className="forumGroupDiv">
                    <Button className="createForumGroupButton"onClick={evt => {
                        toggle()
                    }}>Create Topic</Button>
                    
                    <ForumGroupList  setForumGroupId={setForumGroupId}/>
                </div>  
                {component}
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <p>Create New Topic</p>
                    </ModalHeader>
                    <ModalBody>
                        <input type="forumName" ref={name} autoFocus placeholder="type name"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={evt => {
                            addForumGroup({
                                name: name.current.value
                            })
                            toggle()
                        }}>Create Topic</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}