import React, { useContext } from "react"
import { CharacterContext } from "./CharacterProvider"
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap"
import { ReadComicsContext } from "./ReadComicsProvider"


export default ({ setLoading }) => {
    const { comics, deleteComic } = useContext(CharacterContext)
    const { addReadComic } = useContext(ReadComicsContext)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const filteredComics = comics.filter(comic => comic.userId === currentUserId)

    return (
        <div className="readingListContainer">
            {
                filteredComics.map(comicObj => {
                    return (
                        <Card key={comicObj.id} className="comicCard">
                            <a className="comicAnchor" href={comicObj.purchaseUrl} target="_blank" rel="noopener noreferrer">
                                <CardImg className="comicImage" src={comicObj.image} alt="comic_image" />
                            </a>
                            <CardTitle className="cardTitle">{comicObj.title}</CardTitle>
                            <CardBody className="cardBody">
                                <div className="comicButtonsContainer">
                                    <Button className="comicButtons readButton" onClick={evt => {
                                        evt.preventDefault()
                                        setLoading(true)
                                        addReadComic({
                                            userId: comicObj.userId,
                                            title: comicObj.title,
                                            image: comicObj.image,
                                            purchaseUrl: comicObj.purchaseUrl,
                                            comicId: comicObj.comicId
                                        })
                                            .then(() => deleteComic(comicObj.id))
                                            .then(() => setLoading(false))


                                    }}>Mark as Read</Button>
                                    <Button className="comicButtons" onClick={evt => {
                                        evt.preventDefault()
                                        deleteComic(comicObj.id)
                                    }}>Remove</Button>
                                </div>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    )
}