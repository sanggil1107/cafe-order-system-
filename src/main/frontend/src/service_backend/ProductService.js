import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/menu";

class ProductService {

    // 음료 조회
    getDrinkList() {
        return axios.get(BASE_API_URL + "/drink");
    };

    // 상품 조회
    getProductList() {
        return axios.get(BASE_API_URL + "/product");
    };

    // 푸드 조회
    getFoodList() {
        return axios.get(BASE_API_URL + "/food");
    };

    // 커피 조회
    getCoffeeList() {
        return axios.get(BASE_API_URL + "/coffee");
    };
}

export default new ProductService();