import axios from 'axios';

const REVIEW_API_URL = "http://localhost:8080/review";

class ReviewService {
    getReviewlist() {
        return axios.get(REVIEW_API_URL);
    };

    insertReview(review) {
        return axios.post(REVIEW_API_URL + "/write", review);
    };

    getReview(reviewId) {
        return axios.get(REVIEW_API_URL + "/detail", {
            params: {
                reviewId: reviewId
            }
        });
        //return axios.get(REVIEW_API_URL + "/detail", reviewId)
    };
}

export default new ReviewService();