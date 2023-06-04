import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { contextApi } from "../State/context.js";
import "../style/movieItem.css";

const MovieItem = ({ item }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const { show } = item;
    const { dispatch } = useContext(contextApi);
    console.log("THe Tbdb:- ", show.externals.imdb);
    return (
        <>
            <div className="card">
                <div className="card__rating" >
                    <span style={{ color: "gray" }}>⭐</span>
                    <h4 className="card__rating-vote">{Number(show.rating.average || "6.5").toFixed(1)}</h4>
                </div>
                <Link to={`/${show.externals.thetvdb}`} onClick={() => dispatch({ type: "ADD_TV", payload: item })}>
                    <div className="card__image">
                        <img className="img-loaded" alt={show.name} data-key="238" src={show.image ? show.image.medium : "https://upload.wikimedia.org///6/65/Image-Placeholder.svg"
                        } />
                    </div> 
                </Link>
                <div className="card__details">
                    <h4>{show.name}</h4>
                    <div className="card__footer">
                        <p>{show.premiered}</p>
                        <button
  className="button--add-favorite"
  onMouseOver={() => setIsTooltipVisible(true)}
  onMouseLeave={() => setIsTooltipVisible(false)}
  style={{ color: "gray" }}
>
  ❤
  <div className={`tooltip ${isTooltipVisible ? 'tooltip--visible' : ''}`}>
    <span>Add To Favorites</span>
  </div>
</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieItem;