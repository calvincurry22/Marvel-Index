import React, { useContext } from "react"
import { CharacterContext } from "./CharacterProvider"
import { Button } from "reactstrap"
import { ReadComicsContext } from "./ReadComicsProvider"


export default () => {
    const { comics, deleteComic } = useContext(CharacterContext)
    const { addReadComic } = useContext(ReadComicsContext)

    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const filteredComics = comics.filter(comic => comic.userId === currentUserId)

    return (
        <div className="readingListContainer">
            {
                filteredComics.map( comicObj => {
                    return (
                        <div>
                            <a href={comicObj.purchaseUrl} target="_blank" rel="noopener noreferrer"><img src={comicObj.image} alt="comic_image"/></a>
                            <p>{comicObj.title}</p>
                            <Button onClick={evt => {
                                evt.preventDefault()
                                addReadComic({
                                    userId: comicObj.userId,
                                    title: comicObj.title,
                                    image: comicObj.image,
                                    purchaseUrl: comicObj.purchaseUrl,
                                    comicId: comicObj.comicId
                                })
                                .then(() => {
                                    deleteComic(comicObj.id)
                                })
                            }}>Mark As Read</Button>
                            <Button onClick={evt => {
                                evt.preventDefault()
                                deleteComic(comicObj.id)
                            }}>Remove</Button>
                        </div>
                    )
                })
            }
        </div>
    )
}