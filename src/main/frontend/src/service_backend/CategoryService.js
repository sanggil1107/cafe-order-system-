import axios from 'axios';

const CATEGORY_API_URL = "http://localhost:8080/category";

class CategoryService {
    
    // 메인 카테고리 목록
    getMainList() {
        return axios.get(CATEGORY_API_URL + '/main');
    };
}

export default new CategoryService();