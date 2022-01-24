package cafeorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.repository.LikeRepository;

@Service
public class LikeServiceImpl implements LikeService {

	@Autowired
	LikeRepository likeRepository;
	
	@Override
	public void InsertLike() throws Exception {
		
	}
}
