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
import cafeorder.entity.Product;
import cafeorder.entity.User;
import cafeorder.repository.ProductRepository;
import cafeorder.repository.SignRepository;
import cafeorder.service.LikeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LikeController {

	@Autowired
	private LikeService likeService;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private SignRepository signRepository;
	
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
	
	@RequestMapping(value = "/checklike", method = RequestMethod.GET)
	public Boolean CheckLike(@RequestParam("userId") String userId, @RequestParam("productId") int productId) throws Exception {
		return likeService.selectLike(userId, productId);
	}
	
	@RequestMapping(value = "/like", method = RequestMethod.POST)
	public void InsertLike(@RequestBody Map<String, String> m) throws Exception {
		LikeMenuPK pk = new LikeMenuPK(m.get("userId"), Integer.parseInt(m.get("productId")));
		LikeMenu likemenu = new LikeMenu();
		likemenu.setPk(pk);
		likemenu.setLikeyn(m.get("likeyn"));

		User user = signRepository.getById(m.get("userId"));
		Product product = productRepository.getById(Integer.parseInt(m.get("productId")));
		System.out.println("user :" + user);
		System.out.println("product :" + product);
		likemenu.setUser(user);
		likemenu.setProduct(product);
		System.out.println("like2 : " + likemenu);
		likeService.InsertLike(likemenu);
	}
	
	@RequestMapping(value = "/updatelike", method = RequestMethod.PUT)
	public void UpdateLike(@RequestBody Map<String, String> m) throws Exception {
		LikeMenuPK pk = new LikeMenuPK(m.get("userId"), Integer.parseInt(m.get("productID")));
		LikeMenu likemenu = new LikeMenu();
		likemenu.setPk(pk);
		likemenu.setLikeyn(m.get("likeyn"));
		
		User user = signRepository.getById(m.get("userId"));
		Product product = productRepository.getById(Integer.parseInt(m.get("productId")));
		likemenu.setUser(user);
		likemenu.setProduct(product);
		
		likeService.InsertLike(likemenu);
	}
		
}