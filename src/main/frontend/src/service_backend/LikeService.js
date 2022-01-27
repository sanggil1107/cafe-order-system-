import axios from 'axios';

const BASE_API_URL = "http://localhost:8080";

class LikeService {

    checkLike(likeitem) {
        return axios.get(BASE_API_URL + "/checklike", {
            params: {
                userId: likeitem.userId,
                productId: likeitem.productId
            }
        });
    };

    setLike(likeitem) {
        // return axios.post(BASE_API_URL + "/like", {

        //         userId: likeitem.userId,
        //         productId: likeitem.productId,
        //         likeyn: likeitem.likeyn


        // });
        return axios.post(BASE_API_URL + "/like", likeitem);
    };

    updateLike(likeitem) {
        return axios.put(BASE_API_URL + "/updatelike", likeitem);
    };
}

export default new LikeService();