import Movie from "../models/movie.js"

export default async (req, res) => {
    // const { name, views, watched, liked } = req.body
    const data = await Movie.create(req.body)
    res.status(200).json(data)
}