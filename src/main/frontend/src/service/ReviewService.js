import axios from 'axios';

const REVIEW_API_URL = "http://localhost:8080/review";

class ReviewService {
    
    // 리뷰 목록
    getReviewlist() {
        return axios.get(REVIEW_API_URL);
    };

    // 리뷰 작성
    insertReview(review) {
        return axios.post(REVIEW_API_URL + "/write", review);
    };

    // 리뷰 상세
    getReview(reviewId) {
        return axios.get(REVIEW_API_URL + "/detail", {
            params: {
                reviewId: reviewId
            }
        });
        //return axios.get(REVIEW_API_URL + "/detail", reviewId)
    };

    // 리뷰 수정
    updateReview(review) {
        return axios.put(REVIEW_API_URL + "/update", review);
    };

    // 리뷰 삭제
    deleteReview(reviewId) {
        return axios.delete(REVIEW_API_URL + "/delete", {
            params: {
                reviewId: reviewId,
            }
        });
    };
}

export default new ReviewService();