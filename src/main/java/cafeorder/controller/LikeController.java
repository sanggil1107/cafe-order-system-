package cafeorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.service.LikeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LikeController {

	@Autowired
	private LikeService likeService;
	
	@RequestMapping(value = "/like", method = RequestMethod.POST)
	public void InsertLike() throws Exception {
		likeService.InsertLike();
	}
	
}