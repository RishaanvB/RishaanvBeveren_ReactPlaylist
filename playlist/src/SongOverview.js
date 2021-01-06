

import React, { useState } from "react"
import SongFilter from "./Components/SongFilter";
import SongForm from "./Components/SongForm"
import SongList from "./Components/SongList"

import { sortByTitle, sortByArtist, sortByRating, reverseArray } from "./Functions/sorterFunctions"

/* 
optioneel: waarom 
const handleDeleteSong = (selectedId) => setSongData([...songData].filter(song => song.id !== selectedId))
 niet werkt zonder brackets in ...songData */


function SongOverview() {
    const [songData, setSongData] = useState([]);

    const [inputData, setInputData] = useState({
        songTitle: "",
        songArtist: "",
        songGenre: "",
        songRating: "",

    });
    const [typeIsSorted, setTypeIsSorted] = useState("");
    const [songGenre, setsongGenre] = useState("")
    const [songRating, setsongRating] = useState("")
    console.log(songData, "songData")
// ========================================================================================
    //FiLTERS
  
    const handleFilteredGenre = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setsongGenre(value)
      
    }
    


  // ========================================================================================

  const handleFilteredRating = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setsongRating(value)
  
}

    //FiLTERS


    const generateId = () => Math.random().toString(36).substr(2, 10);

    //DELETE FUNCTIONS
    const handleDeleteSong = selectedId => {

        setSongData([...songData].filter(song => song.id !== selectedId))

    }

    const handleDeleteAll = () => {
        setSongData([]);

    }

    //DELETE FUNCTIONS


    const handleSubmitSong = event => {
        event.preventDefault();
        handleInputChange(event);
        // setSongData(prevSongData => [...prevSongData, inputData]);
        console.log(inputData, "inputdata")
        setSongData(prevSongData => [...prevSongData, inputData]  );
        setTypeIsSorted("");
    }

    const handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setInputData(prevInputData => ({ ...prevInputData, [name]: value, id: generateId() }));
    }



    //SORTER
    const handleSorter = event => {
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
    //SORTER


    return (
        <div>
            <SongFilter handleFilteredGenre={handleFilteredGenre} handleFilteredRating={handleFilteredRating} />
            <SongForm

                handleInputChange={handleInputChange}
                inputData={inputData}
                handleSubmitSong={handleSubmitSong}
                handleSorter={handleSorter}

            />

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

            <SongList songData={songData} handleDeleteSong={handleDeleteSong}  songGenre={songGenre} songRating={songRating}  />
            <br />
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    );

}

export default SongOverview;