package cafeorder.controller;


import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

  @RequestMapping("/api/hello")
  public String hello() {
    return "hi. time is " + new Date() + "\n";
  }
}
