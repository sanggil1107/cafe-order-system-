package cafeorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    ReviewRepository reviewRepository;
    
    // 리뷰 목록
    @Override
    public void selectReviewList() throws Exception {

    }

    // 리뷰 작성 or 수정
    @Override
    public void saveReview() throws Exception {

    }

    // 리뷰 상세 화면
    @Override
    public void selectReviewDetail() throws Exception {

    }

    // 리뷰 삭제
    @Override
    public void deleteReview() throws Exception {

    }
}
