import React, { useContext } from "react"
import { ReadComicsContext } from "./ReadComicsProvider"
import { Card, CardImg, CardTitle } from "reactstrap"
import "./ComicsExplorer.css"

export default () => {
    const { readComics } = useContext(ReadComicsContext)
    const currentUser = parseInt(localStorage.getItem("marvel_user"))
    const foundReadComics = readComics.filter(comics => comics.userId === currentUser)

    return (
        <div>
            <h1 className="readComicsHeader">Read Comics</h1>
            <p className="readTotal">Total Read: {foundReadComics.length}</p>
            <div className="readComicsContainer">
                {
                    foundReadComics.map(comicObj => {
                        return (

                            <div key={comicObj.id} className="readComic">
                                <Card className="readComicCard">
                                    <CardImg className="comicImage" src={comicObj.image} alt="comic_image" />
                                    <CardTitle>
                                        {comicObj.title}
                                    </CardTitle>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}