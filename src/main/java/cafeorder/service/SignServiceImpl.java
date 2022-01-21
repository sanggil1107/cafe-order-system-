package cafeorder.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.User;
import cafeorder.repository.SignRepository;

@Service
public class SignServiceImpl implements SignService {
    
    @Autowired
    private SignRepository signRepository;

    @Override
    public void insertUser(User user) throws Exception {        
        //System.out.println(LocalDate.now());
        user.setInstdate(LocalDate.now());
        user.setGrade("Bronze");
        System.out.println(user);
        signRepository.save(user);
    }

    @Override
    public String selectUser(User user) throws Exception {
        String result;
        User u = signRepository.findByUserIdAndPwd(user.getUserId(), user.getPwd());
        System.out.println(user);
        System.out.println("getUser : " + u);
        if (u != null) {
            result = "success";
        }
        else {
            result = "fail";
        }
        return result;
    }   

    @Override
    public Boolean selectUserId(String userId) throws Exception {
        Optional<User> op = signRepository.findById(userId);
        if (op.isPresent()) {
            return true;
        }
        else {
            return false;
        }
    }
}
