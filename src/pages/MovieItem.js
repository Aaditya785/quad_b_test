import React from 'react'
import { Link } from 'react-router-dom';
import "../style/movieItem.css";

const MovieItem = ({ item }) => {
    const { show } = item;
    console.log("THe Tbdb:- ",show.externals.imdb);
    return (
        <>
            <div className="card">
                <div className="card__rating">
                    ⭐
                    <h4 className="card__rating-vote">{Number(show.rating.average || "6.5").toFixed(1)}</h4>
                </div>
                <Link to={`/${show.externals.imdb}`}>
                    <div className="card__image">
                        <img className="img-loaded" alt={show.name} data-key="238" src={show.image ? show.image.medium : "https://upload.wikimedia.org///6/65/Image-Placeholder.svg"
                        } />
                    </div>
                </Link>
                <div className="card__details">
                    <h4>{show.name}</h4>
                    <div className="card__footer">
                        <p>{show.premiered}</p>
                        <button className="button--add-favorite"
                            style={{ color: "gray" }}>❤</button>
                        <div className="tooltip">
                            <span>Add To Favorites</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieItem