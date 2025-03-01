const express = require('express');
const router = express.Router();
 
  const Movie = require("./../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find().then((allMovies)=> {
        let data = allMovies;  
        console.log(data);     
        res.render("movies", {data});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving all movies"})
    })
});

router.get("/movie/:id", (req, res, next) => {
    console.log(req.params.id);

    Movie.findById(req.params.id).then((movie) => {
        console.log(movie);
        res.render(movie, {movie});
    }).catch((error)=>{
        res.status(500).json({ message: "Error while retrieving the movie"})
    })
})
  

module.exports = router;
