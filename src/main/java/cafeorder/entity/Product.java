package cafeorder.entity;

import java.math.BigDecimal;

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
@Table(name = "tb_product")
@NoArgsConstructor
@Data
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sub_id")
    private SubCategory subId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "kcal")
    private BigDecimal kcal;

    @Column(name = "sugars")
    private BigDecimal sugars;

    @Column(name = "protein")
    private BigDecimal protein;

    @Column(name = "sodium")
    private BigDecimal sodium;

    @Column(name = "fat")
    private BigDecimal fat;

    @Column(name = "caffeine")
    private BigDecimal caffeine;

    @Column(name = "image")
    private String image;

    @Column(name = "price")
    private int price;
}
