package cafeorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cafeorder.entity.MainCategory;

@Repository
public interface MainCategoryRepository extends JpaRepository<MainCategory, Integer> {
    
}
