package cafeorder.service;

import java.util.List;

import cafeorder.entity.Product;

public interface ProductService {
    List<Product> DrinkList() throws Exception;
    List<Product> FoodList() throws Exception;
    List<Product> ProductList() throws Exception;
    Product ProductDetail(int productId) throws Exception;
}
