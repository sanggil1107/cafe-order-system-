package cafeorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    
    @Autowired
    private ProductService productService;
}
