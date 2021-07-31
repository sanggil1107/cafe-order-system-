package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_user")
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue
    private String userId;

    @Column(name = "pwd")
    private String pwd;

    @Column(name = "grade")
    private String grade;

    @Column()
    private String instdate;

    @Column(name = "address")
    private String address;

}
