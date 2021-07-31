package cafeorder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.entity.MainCategoryEntity;
import cafeorder.entity.SubCategoryEntity;
import cafeorder.service.CategoryService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/category")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;

    // 메인 카테고리 목록
    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public List<MainCategoryEntity> MainList(Model model) throws Exception{
        return categoryService.selectMainList();
    }

    // 서브 카테고리 목록
    @RequestMapping(value = "/sub", method = RequestMethod.GET)
    public List<SubCategoryEntity> SubList(@RequestParam("mainId") int mainId) throws Exception{
        System.out.println(mainId);
        return categoryService.selectSubList(mainId);
    }
}
