import React, { useState } from "react"
import SongForm from "./Components/SongForm"
import SongList from "./Components/SongList"

import { sortByTitle, sortByArtist, sortByRating, reverseArray } from "./Functions/sorterFunctions"



function SongOverview() {
    const [songData, setSongData] = useState([]);
    const [typeIsSorted, setTypeIsSorted] = useState("");
    const [inputData, setInputData] = useState({
        songTitle: "",
        songArtist: "",
        songGenre: "",
        songRating: ""
    });

    const handleSubmitSong = (event) => {
        event.preventDefault();
        setSongData(prevSongData => [...prevSongData, inputData]);
        setTypeIsSorted("");

    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }));
    }
    const handleSorter = (event) => {
        const { name } = event.target;
        event.preventDefault();
        switch (name) {

            case "title":
                typeIsSorted !== "title" ?
                    setSongData(sortByTitle(songData)) : setSongData(reverseArray(songData));
                setTypeIsSorted("title");
                break;

            case "artist":
                typeIsSorted !== "artist" ?
                    setSongData(sortByArtist(songData)) : setSongData(reverseArray(songData));
                setTypeIsSorted("artist");
                break;

            case "rating":
                typeIsSorted !== "rating" ?
                    setSongData(sortByRating(songData)) : setSongData(reverseArray(songData));
                setTypeIsSorted("rating");
                break;
            default:
        }
    }

    return (
        <div>
            <SongForm
                handleInputChange={handleInputChange}
                inputData={inputData}
                handleSubmitSong={handleSubmitSong}
                handleSorter={handleSorter} />

            <h1>My Playlist</h1>

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