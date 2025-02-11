import Movie from "../models/movie.js"

export default async (req, res) => {
    const id = req.params.id 
    await Movie.findByIdAndDelete(id)
    res.status(200).json({message: "Successfully deleted"})
}