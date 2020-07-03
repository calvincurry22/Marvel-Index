import React, { useContext, useState } from "react"
import { CharacterContext } from "./CharacterProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import "./CharacterSearchResults.css"
import { ReadComicsContext } from "./ReadComicsProvider"

export default ({ characterObj }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { comics, addComic } = useContext(CharacterContext)
    const { readComics } = useContext(ReadComicsContext)
    const [selectedComic, setSelectedComic] = useState({ comic: { id: 0 } })
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const imageSource = `${characterObj.thumbnail.path}.${characterObj.thumbnail.extension}`
    const comicsArray = characterObj.comicInfo

    return (
        <>
            <div className="characterPanel">

                <div className="characterContainer">
                    <h2 className="characterName">{characterObj.name}</h2>
                    <div className="imageDescriptionContainer">
                        <img className="characterImage" src={imageSource} alt="characterImage" />
                        <p className="characterDescription"><strong>DESCRIPTION:</strong> {characterObj.description}</p>
                    </div>
                </div>

                <div className="comicsContainer">
                    <h2 className="comicsHeader">Associated Comics</h2>

                    <div className="comicDetailsContainer">
                        <div className="comics">
                            {
                                comicsArray.map(comic => {

                                    if (!comic.images[0]) {
                                        return false;
                                    } else {
                                        const comicImage = comic.images[0].path + "/portrait_xlarge." + comic.images[0].extension
                                        return (
                                            <div key={comic.id} className="comic">
                                                <span className="fakeLink href:hover comicExplorerAnchor" onClick={evt => {
                                                    evt.preventDefault()
                                                    const comicExistsOnReadingList = comics.find(comicObj => {
                                                        return comicObj.userId === currentUserId && comicObj.comicId === comic.id
                                                    })
                                                    const comicExistsOnReadList = readComics.find(comicObj => {
                                                        return comicObj.userId === currentUserId && comicObj.comicId === comic.id
                                                    })
                                                    if (comicExistsOnReadingList) {
                                                        alert("This comic is already on your reading list")
                                                    } else if (comicExistsOnReadList) {
                                                        alert("You have already read this comic")
                                                    } else {
                                                        setSelectedComic({ comic })
                                                        toggle()
                                                    }
                                                }}><img src={comicImage} alt="comic" /></span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>
                                {selectedComic.comic.title}
                            </ModalHeader>
                            <ModalBody>
                                Add to reading list?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={evt => {
                                    evt.preventDefault()
                                    addComic({
                                        userId: currentUserId,
                                        title: selectedComic.comic.title,
                                        image: `${selectedComic.comic.images[0].path}.${selectedComic.comic.images[0].extension}`,
                                        purchaseUrl: selectedComic.comic.urls[0].url,
                                        comicId: selectedComic.comic.id
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

