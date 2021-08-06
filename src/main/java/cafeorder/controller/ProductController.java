package cafeorder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.entity.Product;
import cafeorder.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    
    @Autowired
    private ProductService productService;

    // 제품 조회
    public List<Product> ProductList(Model model) throws Exception {
        return null;
    }


    // 제품 상세정보
    public Product ProductDetail(@RequestParam("productId") int productId) throws Exception {
        return null;        
    }
}
