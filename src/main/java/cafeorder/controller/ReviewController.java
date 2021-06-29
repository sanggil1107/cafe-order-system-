package cafeorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.service.ReviewService;

@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // 리뷰 목록
    @RequestMapping(value = "/review", method = RequestMethod.GET)
    public String ReviewList(Model model) throws Exception {
        reviewService.selectReviewList();
        return "review";
    }

    // 리뷰 작성 화면
    @RequestMapping(value = "/review/write", method = RequestMethod.GET)
    public String ReviewWrite() throws Exception {
        return "reviewwrite";
    }

    // 리뷰 작성
    @RequestMapping(value = "/review/write", method = RequestMethod.POST)
    public String InsertReview() throws Exception {
        reviewService.saveReview();
        return "redirect:/review";
    }

    // 리뷰 상세 화면
    @RequestMapping(value = "/review/{reviewIdx}", method = RequestMethod.GET)
    public String ReviewDetail(Model model) throws Exception {
        reviewService.selectReviewDetail();
        return "reviewdetail";
    }

    // 리뷰 수정
    @RequestMapping()
    public String UpdateReview() throws Exception {
        reviewService.saveReview();
        return "redirect:/review";
    }

    // 리뷰 삭제
    @DeleteMapping(value = "/review/{reviewIdx}")
    public String DeleteReview() throws Exception {
        reviewService.deleteReview();
        return "redirect:/review";
    }

}
