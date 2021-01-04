import React from "react"

function SongForm(props) {
    const { handleInputChange, inputData, handleSubmitSong } = props;

    return (
        <form onSubmit={handleSubmitSong} >
            <input
                onChange={handleInputChange}
                type="text"
                name="songTitle"
                value={inputData.songTitle}
                required />

            <input
                onChange={handleInputChange}
                type="text"
                name="songArtist"
                value={inputData.songArtist}
                required />

            <select
                onChange={handleInputChange}
                value={inputData.songGenre}
                name="songGenre"
                required>

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
                required />


            <button >Click Me</button>
        </form>
    );
}


export default SongForm