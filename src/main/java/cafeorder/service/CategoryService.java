package cafeorder.service;

import java.util.List;

import cafeorder.entity.MainCategoryEntity;
import cafeorder.entity.SubCategoryEntity;

public interface CategoryService {
    List<MainCategoryEntity> selectMainList() throws Exception;
    List<SubCategoryEntity> selectSubList() throws Exception;
}
