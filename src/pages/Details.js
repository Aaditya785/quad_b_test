import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [data, setData] = useState([]);
    let { id } = useParams();

    console.log(id);

    // fetch data when page loads
    useEffect(() => {
        const fetchData = async () => {
            const req = await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${id}`);
            const res = await req.json();
            setData(res);
            console.log("The OUtput from details components:- ", data);
        };
        fetchData();
    }, []);

    if (!data.show) {
        return <h1>Loading..!..</h1> 
    }

    return (
       
        <h1>Hello i'm herer{data.title}</h1>
        // <div className="view">
        //     <div className="back__button">
        //         <button className="button--back">Back</button>
        //     </div>
        //     <div className="view__wrapper">
        //         <div className="view__poster">
        //             <div className="LazyLoad is-visible">
        //             <img class=" img-loaded" data-key="605886" src="https://image.tmdb.org/t/p/w300_and_h450_face//mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg"/>
        //                 {/* <img className="img-loaded" alt={data.show.name} data-key="238" src={data.show.image ? data.show.image.medium : "https://upload.wikimedia.org///6/65/Image-Placeholder.svg"
        //                 } /> */}
        //             </div>
        //         </div>
        //         <div className="view__details">
        //             <h1 className="view__title">{data.show.name}<span> ({parseInt(data.show.premiered)}) </span></h1>
        //             <p className="view__rating mb-0">
        //                 <i className="fa fa-star"></i>&nbsp;{Number(data.show.rating.average || "6.5").toFixed(1)} Rating
        //             </p>
        //             <i className="mt-0 text-subtle">
        //                 <a className="view__genre" href="/genre/Action/28">Action / </a>
        //                 <a className="view__genre" href="/genre/Crime/80">Crime / </a>
        //                 <a className="view__genre" href="/genre/Thriller/53">Thriller / </a>
        //                 <a className="view__genre" href="/genre/Mystery/9648">Mystery </a>
        //             </i><h4 className="view__overview-title">Overview</h4>
        //             <p className="view__overview">
        //                 {data.show.summary}
        //             </p>
        //             <div className="view__actions">
        //                 <button className="button--primary">Watch Trailer &nbsp;&nbsp;<i className="fa fa-play"></i></button>&nbsp;
        //                 <button className="button--favorites" style={{ color: "white", background: "transparent", border: "1px solid white" }}>Favorite&nbsp;&nbsp;<i className="fa fa-heart" style={{ color: "white" }}></i>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Details