package cafeorder.service;

import java.util.List;
import java.util.Optional;

import cafeorder.entity.ReviewEntity;

public interface ReviewService {
  
  List<ReviewEntity> selectReviewList() throws Exception;
  void saveReview(ReviewEntity reviewEntity) throws Exception;
  ReviewEntity selectReviewDetail(int reviewId) throws Exception;
  void deleteReview() throws Exception;
  
}
