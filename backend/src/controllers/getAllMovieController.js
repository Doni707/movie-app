import Movie from "../models/movie.js"

export default async (req, res) => {
    let movies;
    const page = req.query.page || 0
    const moviesPerPage = 5

    switch (req.query.fitler) {
        case "watched":
            movies = await Movie.find({ watched: true }).lean()
            break;
        case "liked":
            movies = await Movie.find({ liked: true }).lean();
            break;
        default:
            break;
    }
    movies = await Movie.find().lean().skip(page*moviesPerPage).limit(moviesPerPage)
    const moviesLength = await Movie.find().lean()
    
    res.status(200).json({movies, length: moviesLength.length})
}