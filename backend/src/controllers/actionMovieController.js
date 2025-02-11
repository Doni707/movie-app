import Movie from "../models/movie.js"

export default async (req, res) => {    
    const id = req.params.id
    const action = req.url.split("/")[1]
    const oldData = await Movie.findById(id)
    const newLiked = !oldData[action]
    await Movie.findByIdAndUpdate(id, {[action]: newLiked})
    res.status(201).json({message: "Successfully liked"})
}