package cafeorder.service;

public interface ReviewService {
  
  void selectReviewList() throws Exception;
  void saveReview() throws Exception;
  void selectReviewDetail() throws Exception;
  void deleteReview() throws Exception;
  
}
