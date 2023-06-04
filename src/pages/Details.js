import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextApi } from "../State/context.js";
import "./Details.css";

const Details = () => {
    const { state: { tv }, } = useContext(contextApi);



    return (
        <section className='main'>
            <Link to="/">
                <button className='back_button'>Back</button>
            </Link>
            {/* img section  */}
            <div>
                <img src={tv.show.image ? tv.show.image.original : "https://upload.wikimedia.org/wikipedia//6/65/-Image-Placeholder.svg"} alt={tv.show.name} className="image" />
            </div>

            {/* summary section  */}
            <div className="summary_box">
                <h1 className="show_name">{tv.show.name}</h1>
                <div className='genre_box'>
                    {tv.show.genres.map((genre) => (
                        <span
                            key={genre}
                            className="genre_types"
                        >
                            {genre}
                        </span>
                    ))}
                </div>

                <div className="sum_box">
                    <h1 className="sum_story">STORY:</h1>
                    <p style={{fontSize: "1rem"}}>
                        {tv.show.summary.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                </div>
                <div className="details">
                    <h1 className="detail_heading">DETAILS:</h1>
                    <p>Status: {tv.show.status}</p>
                    <p>First air date: {tv.show.premiered || "Unknown"}</p>
                    <p>Spoken language: {tv.show.language}</p>
                    <p>Runtime: {tv.show.runtime || "Unknown"} minute</p>
                </div>
            </div>


        </section>
    )
}

export default Details