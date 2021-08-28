import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/sign";

class UserService {

    setUser(user) {
        return axios.post(BASE_API_URL + "/signup", user);
    };

    getUser(user) {
        return axios.get(BASE_API_URL + "/signin", {
            params: {
                //user: user
                userId: user.userId,
                pwd: user.pwd
            }
        });
        //return axios.post(BASE_API_URL + "/signin", user);
    };

    checkId(userid) {
        return axios.get(BASE_API_URL + "/checkid", {
            params: {
                userid: userid
            }
        })
    };
}

export default new UserService();