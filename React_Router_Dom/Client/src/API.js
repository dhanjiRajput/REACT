import axios from "axios";

const API=axios.create({
    baseurl:"http://localhost:8090"
});

export default API;