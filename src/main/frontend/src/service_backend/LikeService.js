import axios from 'axios';

const BASE_API_URL = "http://localhost:8080";

class LikeService {

    setLike(likeitem) {
        // return axios.post(BASE_API_URL + "/like", {

        //         userId: likeitem.userId,
        //         productId: likeitem.productId,
        //         likeyn: likeitem.likeyn


        // });
        return axios.post(BASE_API_URL + "/like", likeitem);
    }
}

export default new LikeService();