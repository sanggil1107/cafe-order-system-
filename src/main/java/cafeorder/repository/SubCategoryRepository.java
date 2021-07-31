package cafeorder.repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cafeorder.entity.MainCategoryEntity;
import cafeorder.entity.SubCategoryEntity;

@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategoryEntity, Integer> {
    List<SubCategoryEntity> findAllByMainId(@Param(value = "mainId") MainCategoryEntity mainId);
}
