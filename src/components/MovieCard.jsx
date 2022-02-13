import React from "react";
import NameForm from "./Description"
const MovieCard = ({ movie }) => {
    return (
        <div style={{ width: "18rem", marginBottom:"30px",border: "4px solid #008000",marginLeft:"10%"}}>
            <img  src={movie.posterUrl} />
            <div>
                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
                <h5>{movie.rate}</h5>
                <NameForm>{movie.description}</NameForm>
            </div>
        </div>
    );
};

export default MovieCard;
