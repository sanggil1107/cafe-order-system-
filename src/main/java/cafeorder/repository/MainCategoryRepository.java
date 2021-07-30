package cafeorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cafeorder.entity.MainCategoryEntity;

@Repository
public interface MainCategoryRepository extends JpaRepository<MainCategoryEntity, Integer> {
    
}
