package cafeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.ReviewEntity;
import cafeorder.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    // 리뷰 목록
    @Override
    public List<ReviewEntity> selectReviewList() throws Exception {

        return reviewRepository.findAll();
    }

    // 리뷰 작성 or 수정
    @Override
    public void saveReview(ReviewEntity reviewEntity) throws Exception {

        reviewRepository.save(reviewEntity);
    }

    // 리뷰 상세 화면
    @Override
    public ReviewEntity selectReviewDetail() throws Exception {

        ReviewEntity reviewEntity = null;
        //reviewRepository.findById(id)
        return reviewEntity;
    }

    // 리뷰 삭제
    @Override
    public void deleteReview() throws Exception {

    }
}
