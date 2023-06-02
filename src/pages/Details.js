import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const name = useParams();

    console.log(name)
    return (
        <div className="view">
            <div className="back__button">
                <button className="button--back">Back</button>
            </div>
            <div className="view__wrapper">
                <div className="view__poster">
                    <div className="LazyLoad is-visible">
                        <img className=" img-loaded" data-key="605886" src="https://image.tmdb.org/t/p/w300_and_h450_face//mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg" />
                    </div>
                </div>
                <div className="view__details">
                    <h1 className="view__title">To Catch a Killer<span> (2023) </span></h1>
                    <p className="view__rating mb-0">
                        <i className="fa fa-star"></i>&nbsp;6.9 Rating
                    </p>
                    <i className="mt-0 text-subtle">
                        <a className="view__genre" href="/genre/Action/28">Action / </a>
                        <a className="view__genre" href="/genre/Crime/80">Crime / </a>
                        <a className="view__genre" href="/genre/Thriller/53">Thriller / </a>
                        <a className="view__genre" href="/genre/Mystery/9648">Mystery </a>
                    </i><h4 className="view__overview-title">Overview</h4>
                    <p className="view__overview">
                        Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.
                    </p>
                    <div className="view__actions">
                        <button className="button--primary">Watch Trailer &nbsp;&nbsp;<i className="fa fa-play"></i></button>&nbsp;
                        <button className="button--favorites" style={{color: "white", background: "transparent", border: "1px solid white"}}>Favorite&nbsp;&nbsp;<i className="fa fa-heart" style={{color: "white"}}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details