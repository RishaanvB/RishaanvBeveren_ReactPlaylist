
import React from "react"


function SongInputs(props) {
    const { handleInputChange, inputData, handleSubmitSong } = props;

    return (
        <>

            <form className="song-input-container" onSubmit={handleSubmitSong} >
                <div>
                    <label htmlFor="songTitle">Title:</label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="songTitle"
                        value={inputData.songTitle}
                        id="songTitle"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="songArtist">Artist:</label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="songArtist"
                        value={inputData.songArtist}
                        id="songArtist"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="songGenre">Genre:</label>
                    <select

                        onChange={handleInputChange}
                        value={inputData.songGenre}
                        name="songGenre"
                        id="songGenre"
                        required
                    >

                        <option value="">-Choose Genre-</option>
                        <option >Rock</option>
                        <option >Dance</option>
                        <option >Country</option>
                        <option >Pop</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="songRating">Rating:</label>
                    <input
                        onChange={handleInputChange}
                        type="number"
                        name="songRating"
                        value={inputData.songRating}
                        id="songRating"

                        min="1"
                        max="5"
                        required
                    />
                </div>
                <button className="add-btn">Add Song</button>
            </form>
        </>
    )
}



export default SongInputs