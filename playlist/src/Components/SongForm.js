import React from "react"

function SongForm(props) {
    const { handleChange, inputData } = props



    return (
        <form >
            <input
                onChange={handleChange}
                type="text"
                name="songTitle"
                value={inputData.songTitle} />
            <input
                onChange={handleChange}
                type="text"
                name="songArtist"
                value={inputData.songArtist} />
            <button >Click Me</button>
        </form>
    )
}


export default SongForm