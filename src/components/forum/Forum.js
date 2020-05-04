import React, { useState, useRef, useEffect, useContext } from "react"
import ForumPage from "./ForumPage"
import { ForumProvider } from "./ForumProvider"
import { UserProvider } from "../users/UserProvider"
import "./Forum.css"
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"
import { ForumGroupsProvider, ForumGroupsContext } from "./ForumGroupsProvider"
import ForumGroupList from "./ForumGroupList"
import ForumPostList from "./ForumPostList"



export default () => {
   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)
   const name = useRef()
   const { addForumGroup } = useContext(ForumGroupsContext)
   const [forumGroupId, setForumGroupId] = useState(null)
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
                <Button onClick={evt => {
                    toggle()
                }}>Create Forum Group</Button>
                {/* <ForumGroupsProvider> */}
                    <UserProvider>
                        <ForumProvider>
                            <ForumGroupList  setForumGroupId={setForumGroupId}/>
                            {component}
                        </ForumProvider>
                    </UserProvider>
                {/* </ForumGroupsProvider> */}
            </div>
            {/* <ForumGroupsProvider> */}
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <p>Create New Group</p>
                    </ModalHeader>
                    <ModalBody>
                        <input type="forumName" ref={name} placeholder="type name"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={evt => {
                            // removeComic(selectedComic.comic.id)
                            addForumGroup({
                                name: name.current.value
                            })
                            toggle()
                        }}>Create Group</Button>
                    </ModalFooter>
                </Modal>
            {/* </ForumGroupsProvider> */}
        </>
    )
}