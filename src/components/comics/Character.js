import React, { useContext, useState, useEffect } from "react"
import { CharacterContext } from "./CharacterProvider"
import "./CharacterSearchResults.css"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"

export default ({ characterObj }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    const { addComic } = useContext(CharacterContext)
    const [selectedComic, setSelectedComic] = useState({comic: {id:0}})
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))

    const imageSource = `${characterObj.thumbnail.path}/portrait_incredible.${characterObj.thumbnail.extension}`
    const comicsArray = characterObj.comicInfo  
    const comicsImage = characterObj.comicInfo[0].images[0].path
    
    
    return (
        <>
            <div className="characterPanel">
        
                <div className="characterContainer">
                    <h2 className="characterName">{characterObj.name}</h2>
                    <div className="imageDescriptionContainer">
                        <img className="characterImage" src={imageSource} alt="characterImage" />
                        <p className="characterDescriptionHeader">Description:</p>
                        <p className="characterDescription">{characterObj.description}</p>
                    </div>
                </div>
                
                <div className="comicsContainer">
                    <h2 className="comicsHeader">Associated Comics</h2>
                        
                            <div className="comicDetailsContainer">
                                <div>
                                    {
                                        comicsArray.map(comic => {
                                            return (
                                                <div>
                                                    <a className="fakeLink href:hover" onClick={evt => {
                                                        console.log(comic)
                                                        setSelectedComic({comic})
                                                        toggle()
                                                        
                                                    }}><img src={comicsImage}></img></a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>
                                        {selectedComic.comic.title}
                                    </ModalHeader>
                                    <ModalBody>
                                        Add {selectedComic.comic.title} to reading list?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={() => {
                                            // removeComic(selectedComic.comic.id)
                                            addComic({
                                                userId: currentUserId,
                                                title: selectedComic.comic.title,
                                                image: selectedComic.comic.images[0].path,
                                                purchaseUrl: selectedComic.comic.urls[1].url,
                                                comidId: selectedComic.comic.id
                                            })
                                            toggle()
                                        }}>Add</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        
                        
                    
                </div>


            </div>
                        
        </>
    )
                
                
            
}
            
            