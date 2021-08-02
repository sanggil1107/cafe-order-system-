package cafeorder.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_coupon")
@NoArgsConstructor
@Data
public class Coupon {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int couponId;

    @Column(name = "info")
    private String info;

    @Column(name = "coupon_price")
    private int couponPrice;

    @Column(name = "createdate")
    private LocalDateTime createdate;

    @Column(name = "validationdate")
    private LocalDateTime validationdate;

    @Column(name = "deleteyn")
    private String deleteyn;
}
