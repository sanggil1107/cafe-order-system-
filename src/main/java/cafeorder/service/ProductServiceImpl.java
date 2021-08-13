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

    @Override
    public List<Product> DrinkList() throws Exception {
        SubCategory subId = subCategoryRepository.getById(1);
        return productRepository.findAllBySubId(subId);
    }

    @Override
    public List<Product> ProductList() throws Exception {
        return null;
    }

    @Override
    public List<Product> FoodList() throws Exception {
        return null;
    }

    @Override
    public Product ProductDetail(int prodcutId) throws Exception {
        return null;
    }

}
