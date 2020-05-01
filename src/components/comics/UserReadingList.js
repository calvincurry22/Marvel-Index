import React, { useContext } from "react"
import { CharacterContext } from "./CharacterProvider"
import { Button } from "reactstrap"


export default () => {
    const { comics, deleteComic } = useContext(CharacterContext)

    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const filteredComics = comics.filter(comic => comic.userId === currentUserId)

    return (
        <div className="readingListContainer">
            {
                filteredComics.map( comicObj => {
                    return (
                        <div>
                            <a href={comicObj.purchaseUrl} target="_blank"><img src={comicObj.image} alt="comic_image"/></a>
                            <h4>{comicObj.title}</h4>
                            <Button onClick={evt => {
                                evt.preventDefault()
                                deleteComic(comicObj.id)
                            }}></Button>
                        </div>
                    )
                })
            }
        </div>
    )
}