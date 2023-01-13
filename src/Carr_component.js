import React from "react"
import ReactDOM from "react-dom/client"

export default function Carr_component (props) {

    return(
        <div className="movie">
            <div   className="movie_img_container" 
                id={`movie_${props.id}`} 
                onMouseOver={() => props.handleOver(props.id)} 
                onMouseLeave={() => props.handleLeave(props.id)}
            >
                <div className="movie_info">
                    <div className="movie_info_content">
                        <h3>{props.title}</h3>
                    </div>
                    
                </div>
                <img src={props.image } alt="" />
            </div>
        </div>
    )
   
}