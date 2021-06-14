package cafeorder.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {
  
  // 리뷰 목록
  @RequestMapping(value = "/review", method = RequestMethod.GET)
  public String ReviewList(Model model) throws Exception {
    return "review";
  }

  // 리뷰 작성 화면
  @RequestMapping(value = "/review/write", method = RequestMethod.GET)
  public String ReviewWrite() throws Exception {
    return "reviewwrite";
  }
}
