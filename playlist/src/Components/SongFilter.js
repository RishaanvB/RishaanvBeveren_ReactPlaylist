import React from "react"


function SongFilter(props) {
    const { handleFilteredGenre, handleFilteredRating } = props


    return (
        <>

            <fieldset onChange={handleFilteredGenre}>
                <legend>Filter by Genre  </legend>
                <select
                    name="songGenre">
                    <option value="ShowAll">Show All</option>
                    <option >Rock</option>
                    <option >Dance</option>
                    <option >Country</option>
                    <option >Pop</option>
                </select>
            </fieldset>

            <fieldset onChange={handleFilteredRating}>
                <legend>Filter by Rating  </legend>
                <select
                    name="songGenre">
                    <option value="ShowAll">Show All</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
            </fieldset>
        </>
        )
}


export default SongFilter;