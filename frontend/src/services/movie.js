import axios from "./axios.js";

const MovieService = {
    all(filter="all", page) {
        return axios.get("/all", {params: {filter, page}})
    },
    get(id) {
        return axios.get(`/${id}`)
    },
    add(movie) {
        return axios.post("/add", movie)
    },
    action(id, type) {
        return axios.put(`/${type}/${id}`)
    },
    delete(id) {
        return axios.delete(`/${id}`)
    }
}

export default MovieService