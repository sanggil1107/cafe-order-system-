package cafeorder.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import cafeorder.entity.LikeMenu;
import cafeorder.entity.LikeMenuPK;
import cafeorder.service.LikeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LikeController {

	@Autowired
	private LikeService likeService;
	
//	@RequestMapping(value = "/like", method = RequestMethod.POST)
//	public void InsertLike(@RequestBody LikeMenuPK pk) throws Exception {
//		System.out.println("like :" + pk.getUserId());
//		System.out.println("like :" + pk.getProductId());
//		likeService.InsertLike();
//	}
//	
//	@RequestMapping(value = "/like", method = RequestMethod.POST)
//	public void InsertLike(@RequestParam("userId") String userId, @RequestParam("prodcutId") int productId, @RequestParam("likeyn") String likeyn) throws Exception {
//		System.out.println("like :" + userId);
//		likeService.InsertLike();
//	}
	
	@RequestMapping(value = "/like", method = RequestMethod.POST)
	public void InsertLike(@RequestBody Map<String, String> m) throws Exception {
//		System.out.println("like :" + m.get("userId"));
//		System.out.println("like :" + m.get("productId").getClass().getName());
//		System.out.println("like :" + m.get("likeyn"));
		LikeMenuPK pk = new LikeMenuPK(m.get("userId"), Integer.parseInt(m.get("productId")));
		LikeMenu likemenu = new LikeMenu();
		likemenu.setPk(pk);
		likemenu.setLikeyn(m.get("likeyn"));
		System.out.println("like : " + likemenu);
		likeService.InsertLike();
	}
		
}