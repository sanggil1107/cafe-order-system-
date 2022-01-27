package cafeorder.service;

import cafeorder.entity.LikeMenu;

public interface LikeService {
	void InsertLike(LikeMenu likemenu) throws Exception;
	Boolean selectLike(String userId, int productId) throws Exception;
}
