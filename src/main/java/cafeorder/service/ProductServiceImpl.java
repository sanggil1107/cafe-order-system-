package cafeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.Product;
import cafeorder.entity.SubCategory;
import cafeorder.repository.ProductRepository;
import cafeorder.repository.SubCategoryRepository;

@Service
public class ProductServiceImpl implements ProductService {
    
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    // 푸드 조회
    @Override
    public List<Product> FoodList() throws Exception {
        SubCategory subId = subCategoryRepository.getById(1);
        return productRepository.findAllBySubId(subId);
    }
 
    // 음료 조회
    @Override
    public List<Product> DrinkList() throws Exception {
        SubCategory subId = subCategoryRepository.getById(2);
        return productRepository.findAllBySubId(subId);
    }

    // 상품 조회
    @Override
    public List<Product> ProductList() throws Exception {
        SubCategory subId = subCategoryRepository.getById(3);
        return productRepository.findAllBySubId(subId);
    }

    // 커피 조회
    @Override
    public List<Product> CoffeeList() throws Exception {
        SubCategory subId = subCategoryRepository.getById(4);
        return productRepository.findAllBySubId(subId);
    }

    @Override
    public Product ProductDetail(int prodcutId) throws Exception {
        return null;
    }

}
