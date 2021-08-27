package cafeorder.service;

import java.time.LocalDate;

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
        User u = signRepository.findByUserIdAndPwd(user.getUserId(), user.getPwd());
        System.out.println(user);
        System.out.println("getUser : " + u);
        String t = "dd";
        return t;
    }   

    @Override
    public Boolean selectUserId(String userid) throws Exception {
        return true;
    }
}
