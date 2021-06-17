package cafeorder.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEntity {
  
  private String userId;
  private String userName;
  private String password;
  private String tel;
  private int points;

}
