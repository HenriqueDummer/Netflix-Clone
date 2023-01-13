import React, {useState, useEffect} from "react"
import Component from "./Carr_component"

export default function Carrousel(props) {


  const api_key = "api_key=1737121e1436b95a69ae79ccd6bc8f4e"
  const base_url = "https://api.themoviedb.org/3"

  var image_url = "https://image.tmdb.org/t/p/w500"
  
  const [movies_popular, set_movies_popular] = useState([])
  const [movie_components, set_movie_components] = useState([])
  const [carr_position, set_carr_position] = useState(0)
  const [carr_length, set_carr_length] = useState(0)

  
  useEffect(() => {
    fetch(base_url + props.category + api_key)  
      .then(res => res.json())
        .then(data => {
          set_movies_popular(data.results)
          set_carr_length(data.results.length * -280)
          console.log(data)
        })
  }, [])

  
  function Next_carr() {
    if(carr_position - 840 < carr_length + 1800){
      set_carr_position(carr_length + 1850)
    }else{
      set_carr_position(carr_position - 840)
    }
  }

  function Prev_carr() {
    if(carr_position + 840 > 0){
      set_carr_position(0)
    }else if(carr_position != 0){
      set_carr_position(carr_position + 840)
    } 
  }

  useEffect(() => {
    document.querySelector(`#carr_${props.id}`).style.transform = `translateX(${carr_position}px)`
  }, [carr_position])

  function handleOver(key) { 

    const on_focus = document.querySelector(`#movie_${key}`)

    
    on_focus.parentElement.classList.add("expanded")
  }
  
  function handleLeave(key) { 

    const on_focus = document.querySelector(`#movie_${key}`)


    on_focus.parentElement.classList.remove("expanded")
  }
  
  return (
    <div className="carr_container">

        <h2 id="pord">{props.title}</h2>

        <button id={props.id} onClick={() => Prev_carr()}><i class="fa-solid fa-chevron-left"></i></button>
        <button id={props.id} onClick={() => Next_carr()}><i class="fa-solid fa-chevron-right"></i></button>

        <div className="carr_items" id={`carr_${props.id}`}>
          {movies_popular.map(movie => {
            return(
              <Component 
                handleOver = {handleOver}
                handleLeave = {handleLeave}
                key= {movie.id}
                id= {movie.id}
                image= {movie.poster_path != null ? image_url + movie.poster_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"}
                title= {movie.original_title}
              />
            )
          })}
        </div>
    </div>
  );
}

