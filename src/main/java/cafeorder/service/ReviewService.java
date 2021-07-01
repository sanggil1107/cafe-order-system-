package cafeorder.service;

import java.util.List;

import cafeorder.entity.ReviewEntity;

public interface ReviewService {
  
  List<ReviewEntity> selectReviewList() throws Exception;
  void saveReview() throws Exception;
  ReviewEntity selectReviewDetail() throws Exception;
  void deleteReview() throws Exception;
  
}
