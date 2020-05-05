import React, { useContext } from "react"
import { ReadComicsContext } from "./ReadComicsProvider"


export default () => {
    const { readComics } = useContext(ReadComicsContext)
    const currentUser = parseInt(localStorage.getItem("marvel_user"))
    const foundReadComics = readComics.filter(comics => comics.userId === currentUser)

    return (
        <div>
            {
                foundReadComics.map(comicObj => {
                    return (
                        <div className="readComic">
                            <img src={comicObj.image} alt="comic_image"/>
                            <p>{comicObj.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}