package cafeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.MainCategory;
import cafeorder.entity.SubCategory;
import cafeorder.repository.MainCategoryRepository;
import cafeorder.repository.SubCategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
    
    @Autowired
    MainCategoryRepository mainCategoryRepository;
    @Autowired
    SubCategoryRepository subCategoryRepository;

    // 메인 카테고리 목록
    public List<MainCategory> selectMainList() throws Exception {
        return mainCategoryRepository.findAll();
    }

    // 서브 카테고리 목록
    public List<SubCategory> selectSubList(int main) throws Exception {
        MainCategory mainId = mainCategoryRepository.getById(main);
        //SubCategoryEntity subCategoryEntity = new SubCategoryEntity();
        //subCategoryEntity.setMainCategoryEntity(mainCategoryEntity);
        //System.out.println(subCategoryEntity.getMainCategoryEntity().getName());
        // MainCategoryEntity mainCategoryEntity = mainCategoryRepository.getById(mainId);
        // List<SubCategoryEntity> subCategoryEntities = mainCategoryEntity.getSubCategoryEntities();
        
        // return subCategoryRepository.findAll();
        System.out.println(subCategoryRepository.findAllByMainId(mainId));
        return subCategoryRepository.findAllByMainId(mainId);
    }
}
