import React from "react"


function Song(props) {
    const { title, artist } = props


    return (

        <table style={{ width: "100%" }}>
            <thead>
                <tr className="song-header">
                    <th className="song-row__item">{title}</th>
                    <th className="song-row__item">{artist}</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </thead>
        </table>
    )
}


export default Song