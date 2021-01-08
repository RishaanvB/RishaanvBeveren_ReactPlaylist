
import React from "react"


function SorterButtons(props) {
    const { handleSorter } = props;

    return (
        <>
            <div className="sort-btns-container">

                <div className="sort-btn sort-title">
                    <span>Song</span>
                    <img src="./assets/sort.png" onClick={handleSorter} name="title" alt="sort icon" />
                </div>

                <div className="sort-btn sort-artist">
                    <span>Artist</span>
                    <img src="./assets/sort.png" onClick={handleSorter} name="artist" alt="sort icon" />
                </div>

                <div className="sort-btn sort-genre">
                    <span>Genre</span>
                </div>

                <div className="sort-btn sort-rating">
                    <span>Rating</span>
                    <img src="./assets/sort.png" onClick={handleSorter} name="rating" alt="sort icon" />
                </div>

            </div>

        </>
    )
}



export default SorterButtons