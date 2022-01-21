import axios from 'axios';

const BASE_API_URL = "http://localhost:8080";

class LikeService {

    setLike() {
        return axios.post(BASE_API_URL + "/like");
    }
}

export default new LikeService();