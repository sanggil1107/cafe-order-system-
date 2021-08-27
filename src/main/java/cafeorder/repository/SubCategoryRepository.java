package cafeorder.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cafeorder.entity.MainCategory;
import cafeorder.entity.SubCategory;

@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer> {
    public List<SubCategory> findAllByMainId(@Param(value = "mainId") MainCategory mainId);
}
