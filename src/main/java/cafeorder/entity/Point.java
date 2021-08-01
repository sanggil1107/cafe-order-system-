package cafeorder.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_point")
@NoArgsConstructor
@Data
public class Point {
    
    // private User userId;
    
    // private int point;
}
