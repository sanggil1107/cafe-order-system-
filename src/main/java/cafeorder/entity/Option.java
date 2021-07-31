package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_option")
@NoArgsConstructor
@Data
public class Option {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int optionId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sub_id")
    private SubCategory subId;

    @Column(name = "name")
    private String name;
}
