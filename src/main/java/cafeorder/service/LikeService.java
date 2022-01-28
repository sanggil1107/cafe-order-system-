package cafeorder.service;

import cafeorder.entity.LikeMenu;

public interface LikeService {
	void InsertLike(LikeMenu likemenu) throws Exception;
	Boolean CheckLike(String userId, int productId) throws Exception;
	LikeMenu SelectLike(String userId, int productId) throws Exception;
}
