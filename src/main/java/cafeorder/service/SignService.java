package cafeorder.service;

import org.springframework.web.bind.annotation.RequestBody;

import cafeorder.entity.User;

public interface SignService {
    void insertUser(User user) throws Exception;
    String selectUser(User user) throws Exception;
    Boolean selectUserId(String userid) throws Exception;
}
