package cafeorder.service;

import java.util.List;

import cafeorder.entity.MainCategory;
import cafeorder.entity.SubCategory;

public interface CategoryService {
    List<MainCategory> selectMainList() throws Exception;
    List<SubCategory> selectSubList(int mainId) throws Exception;
}
