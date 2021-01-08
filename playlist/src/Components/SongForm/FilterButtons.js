import React from "react"


function FilterButtons(props) {
    const { handleFilteredGenre, handleFilteredRating } = props


    return (
        <div className="filter-btns">

            <fieldset onChange={handleFilteredGenre}>
                <legend>Filter by Genre  </legend>
                <select
                    name="songGenre">
                    <option value="">Show All</option>
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
                    <option value="">Show All</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
            </fieldset>
        </div>
    )
}


export default FilterButtons;