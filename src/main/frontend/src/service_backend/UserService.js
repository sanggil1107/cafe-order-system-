import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/sign";

class UserService {

    setUser(user) {
        return axios.post(BASE_API_URL + "/signup", user);
    };

    getUser(user) {
        console.log(user);
        return axios.get(BASE_API_URL + "/signin",null, {
            params: {
                //user: user
                userId: user.userId,
                pwd: user.pwd
            }
        });
        //return axios.post(BASE_API_URL + "/signin", user);
    };
}

export default new UserService();