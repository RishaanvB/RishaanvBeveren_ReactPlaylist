import React from "react"

function SongForm(props) {
    const { handleInputChange, inputData, handleSubmitSong, handleSorter } = props;

    return (
        <form onSubmit={handleSubmitSong} >
            <input
                onChange={handleInputChange}
                type="text"
                name="songTitle"
                value={inputData.songTitle}
                required
            />

            <input
                onChange={handleInputChange}
                type="text"
                name="songArtist"
                value={inputData.songArtist}
                required
            />

            <select
                onChange={handleInputChange}
                value={inputData.songGenre}
                name="songGenre"
                required
            >

                <option value="">--Choose Genre--</option>
                <option >Rock</option>
                <option >Dance</option>
                <option >Country</option>
                <option >Pop</option>
            </select>

            <input
                onChange={handleInputChange}
                type="number"
                name="songRating"
                value={inputData.songRating}
                min="1"
                max="5"
                required
            />
         


            <button>Add Song</button>
            <button onClick={handleSorter} name="title" >Sort by Title</button>
            <button onClick={handleSorter} name="artist">Sort by Artist</button>
            <button onClick={handleSorter} name="rating">Sort by Rating</button>
            {/* <button  onClick={handleSorter} name="title">Filter by Genre</button> */}
        </form>
    );
}


export default SongForm