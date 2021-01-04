import React from "react"
import Song from "./Song"

function SongList(props) {
    const { songData } = props


    return (
        <>
           {songData.map(data=> <Song title={data.songTitle} artist={data.songArtist}/>)}
        </>
    )
}


export default SongList