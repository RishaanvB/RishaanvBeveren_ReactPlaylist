import React, { useState } from "react"
import SongForm from "./Components/SongForm"
import SongList from "./Components/SongList"



function SongOverview() {
    const [songData, setSongData] = useState([{ songTitle: "title1", songArtist: "artist1" }])
    const [inputData, setInputData] = useState({ songTitle: "", songArtist: "" })



    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    return (
        <div>

            <SongForm handleChange={handleChange} inputData={inputData} />
            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </thead>
            </table>
            <br />
            <SongList songData={songData} />
        </div>
    );

}

export default SongOverview;