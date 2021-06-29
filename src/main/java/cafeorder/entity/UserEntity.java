package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_user")
@NoArgsConstructor
@Data
public class UserEntity {

    @Id
    private String userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String tel;

    @Column(nullable = false)
    private int points;

}
