package cafeorder.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

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
        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        reviewEntity.setCreateTime(LocalDateTime.parse(now, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) );
        reviewEntity.setCnt(reviewEntity.getCnt() + 1);
        reviewRepository.save(reviewEntity);
    }

    // 리뷰 상세 화면
    @Override
    public ReviewEntity selectReviewDetail(int reviewId) throws Exception {

        Optional<ReviewEntity> op = reviewRepository.findById(reviewId);
        if(op.isPresent()) {
            ReviewEntity reviewEntity = op.get();
            reviewEntity.setCnt(reviewEntity.getCnt() + 1);
            reviewRepository.save(reviewEntity);
            return reviewEntity;
        }
        else {
            throw new Exception();
        }
        
    }

    // 리뷰 삭제
    @Override
    public void deleteReview(int reviewId) throws Exception {
        reviewRepository.deleteById(reviewId);
    }
}
