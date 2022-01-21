package cafeorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cafeorder.entity.LikeMenu;
import cafeorder.entity.LikeMenuPK;

@Repository
public interface LikeRepository extends JpaRepository<LikeMenu, LikeMenuPK> {

}
