var moviesJSON = require('../movies.json')

//home
exports.home = (req, res) => {
    var movies = moviesJSON.movies
    res.render('home', {
        title: "Harry Potter movies",
        movies: movies
    });
}
//single page
exports.movie_single = (req, res) => {
    var episode_number = req.params.episode_number
    var movies = moviesJSON.movies;
    if(episode_number >=1 && episode_number <= 8){
    var movie = movies[episode_number - 1];
    var title = movie.title;
    var main_characters = movie.main_characters
    res.render('single_page',{
       movies : movies ,
       title : title,
       movie : movie,
       main_characters : main_characters
    }) 
    }else{
        res.render('notFound',{
            movies,
            title : "this is not the page you are looking for"
        })
    }
   
}
// notFound
    
exports.notFound = (req, res) => {
    var movies = moviesJSON.movies;
    res.render('notFound',{
        movies,
        title : "this is not the page you are looking for"
    })
}