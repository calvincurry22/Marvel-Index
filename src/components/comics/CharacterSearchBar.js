import React, { useRef } from "react"

export const CharacterSearchBar = ({ setTerms }) => {
    
    const { terms } = useRef()
   
    return (
        <fieldset className="searchBarFieldset">
            <div className="form-group search">
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    required
                    autoComplete="off"
                    placeholder="Search..."
                    autoFocus
                    className="form-control searchBox"
                />
                <i className="fas fa-book-reader"></i>
            </div>
        </fieldset>
    )
}