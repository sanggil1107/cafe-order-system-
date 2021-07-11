package cafeorder.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.entity.ReviewEntity;
import cafeorder.service.ReviewService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // 리뷰 목록
    @RequestMapping(value = "/review", method = RequestMethod.GET)
    public List<ReviewEntity> ReviewList(Model model) throws Exception {
        return reviewService.selectReviewList();
    }

    // 리뷰 작성 화면
    @RequestMapping(value = "/review/write", method = RequestMethod.GET)
    public String ReviewWrite() throws Exception {
        return "reviewwrite";
    }

    // 리뷰 작성
    @RequestMapping(value = "/review/write", method = RequestMethod.POST)
    public void InsertReview(@RequestBody ReviewEntity reviewEntity) throws Exception {
        reviewService.saveReview(reviewEntity);
    }

    // 리뷰 상세 화면
    @RequestMapping(value = "/review/detail", method = RequestMethod.GET)
    public ReviewEntity ReviewDetail(@RequestParam("reviewId") int reviewId) throws Exception {
        return reviewService.selectReviewDetail(reviewId);
    }

    // 리뷰 수정
    @RequestMapping(value = "/review/update", method = RequestMethod.PUT)
    public void UpdateReview(@RequestBody ReviewEntity reviewEntity) throws Exception {
        reviewService.saveReview(reviewEntity);
    }

    // 리뷰 삭제
    @DeleteMapping(value = "/review/{reviewIdx}")
    public String DeleteReview() throws Exception {
        reviewService.deleteReview();
        return "redirect:/review";
    }

}
