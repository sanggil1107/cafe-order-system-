package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_main_category")
@NoArgsConstructor
@Data
public class MainCategoryEntity {
    
    @Id
    private int mainId;

    @Column(name = "name")
    private String name;
}
