package cafeorder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cafeorder.entity.Product;
import cafeorder.entity.SubCategory;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
    public List<Product> findAllBySubId(@Param(value = "subId") SubCategory subId);
}
