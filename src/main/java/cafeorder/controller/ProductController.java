package cafeorder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.entity.Product;
import cafeorder.service.ProductService;

@RequestMapping(value = "/menu")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    
    @Autowired
    private ProductService productService;

    // 음료 조회
    @RequestMapping(value = "/drink", method = RequestMethod.GET)
    public List<Product> DrinkList(Model model) throws Exception {
        return productService.DrinkList();
    }

    // 상품 조회
    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public List<Product> ProductList(Model model) throws Exception {
        return productService.ProductList();
    }

    // 푸드 조회
    @RequestMapping(value = "/food", method = RequestMethod.GET)
    public List<Product> FoodList(Model model) throws Exception {
        return productService.FoodList();
    }

    // 커피 조회
    @RequestMapping(value = "/coffee", method = RequestMethod.GET)
    public List<Product> CoffeeList(Model model) throws Exception {
        return productService.CoffeeList();
    }

    // 제품 상세정보(공통) 
    public Product ProductDetail(@RequestParam("productId") int productId) throws Exception {
        return null;        
    }

}
