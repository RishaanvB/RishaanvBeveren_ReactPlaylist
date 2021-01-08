
import React from "react"


function SorterButtons(props) {
    const { handleSorter, handleSubmitSong } = props;

    return (
        <>
            <form onSubmit={handleSubmitSong} >
                <button onClick={handleSorter} name="title" >Sort by Title</button>
                <button onClick={handleSorter} name="artist">Sort by Artist</button>
                <button onClick={handleSorter} name="rating">Sort by Rating</button>
            </form>

        </>
    )
}



export default SorterButtons