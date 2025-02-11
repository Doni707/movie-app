import { Schema, model} from "mongoose";

const MovieSchema = new Schema({
    name: {type: String, required: true},
    views: {type: Number, required: true},
    watched: {type: Boolean, required: true},
    liked: {type: Boolean, required: true}
})

const Movie = model("Movie", MovieSchema)
export default Movie