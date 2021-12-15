import React, { useState,useEffect } from 'react'

function MovieDetail() {
  const [movie, setMovie] = useState([])

let getDetail = () =>{
  fetch(`http://localhost:9000/movies`)
  .then((res) => res.json())
  .then((movi) => setMovie(movi))
  .catch((err) => {
    setMovie([])
  })
}
  
  useEffect(() => {
    getDetail()
  }, [])
  console.log(movie)
  return (
    <div className="movie-detail container">
      <div className="detail-body">
        <div>
          <h2 className="card-title">
            {movie.title}
            <span className="release-year"> {movie.release_year}</span>
          </h2>
          <div className="detail-description">
            <p className="card-description">{movie.description}</p>
          </div>
        </div>
        <div className="images">
          <img className="detail-img" src={movie.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
