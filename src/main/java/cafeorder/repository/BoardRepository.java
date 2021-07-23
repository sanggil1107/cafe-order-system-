package cafeorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cafeorder.entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
  
}
