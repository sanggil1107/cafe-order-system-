package cafeorder.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_main_category")
@NoArgsConstructor
@Data
public class MainCategory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mainId;

    @Column(name = "name")
    private String name;

    // @OneToMany(mappedBy = "mainId")
    // private List<SubCategoryEntity> subCategoryEntities = new ArrayList<SubCategoryEntity>();

}
