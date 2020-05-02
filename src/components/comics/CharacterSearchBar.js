import React, { useRef, useEffect } from "react"

export const CharacterSearchBar = ({ setTerms }) => {
    
    const { terms } = useRef()
   
   

    return (
        <fieldset>
            <div className="form-group search">
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    required
                    placeholder="Search..."
                    autoFocus
                    className="form-control"
                />
                <i class="fas fa-book-reader"></i>
            </div>
        </fieldset>
    )
}