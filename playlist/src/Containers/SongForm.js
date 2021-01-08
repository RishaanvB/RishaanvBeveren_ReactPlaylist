import React from "react"
import SongInputs from "../Components/SongForm/SongInputs"
import SorterButtons from "../Components/SongForm/SorterButtons"
import FilterButtons from "../Components/SongForm/FilterButtons"
function SongForm(props) {
    const { handleInputChange, inputData, handleSubmitSong, handleSorter, handleFilteredRating, handleFilteredGenre } = props
    return (
        <>
            <SongInputs
                handleInputChange={handleInputChange}
                inputData={inputData}
                handleSubmitSong={handleSubmitSong}
                handleSorter={handleSorter} />
            <SorterButtons
                handleSorter={handleSorter}
                handleSubmitSong={handleSubmitSong} />
            <FilterButtons
                handleFilteredGenre={handleFilteredGenre}
                handleFilteredRating={handleFilteredRating} />
        </>
    );
}


export default SongForm