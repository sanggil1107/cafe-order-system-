import axios from 'axios';

const REVIEW_API_URL = "http://localhost:8080/review";

class ReviewService {
    getReviews() {
        return axios.get(REVIEW_API_URL);
    }
}

export default new ReviewService();