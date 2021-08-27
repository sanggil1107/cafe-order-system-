package cafeorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cafeorder.entity.User;

@Repository
public interface SignRepository extends JpaRepository <User, String>{
    public User findByUserIdAndPwd(String userId, String pwd);
}
