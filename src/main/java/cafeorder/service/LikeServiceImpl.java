package cafeorder.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.LikeMenu;
import cafeorder.entity.LikeMenuPK;
import cafeorder.repository.LikeRepository;

@Service
public class LikeServiceImpl implements LikeService {

	@Autowired
	LikeRepository likeRepository;
	
	@Override
	public void InsertLike(LikeMenu likemenu) throws Exception {
		likeRepository.save(likemenu);
	}
	
	@Override
	public LikeMenu SelectLike(String userId, int productId) throws Exception {
		LikeMenuPK pk = new LikeMenuPK();
		pk.setUserId(userId);
		pk.setProductId(productId);
		
		return likeRepository.getById(pk);
	}
	
	@Override
	public Boolean CheckLike(String userId, int productId) throws Exception {
		LikeMenuPK pk = new LikeMenuPK();
		pk.setUserId(userId);
		pk.setProductId(productId);
		
		Optional<LikeMenu> op = likeRepository.findById(pk);
		if (op.isPresent()) {
			return true;
		}
		else {	
			return false;
		}
	}
}
