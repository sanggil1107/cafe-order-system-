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
@Table(name = "tb_review")
@NoArgsConstructor
@Data
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reviewId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private int cnt;

    @Column(nullable = false)
    private String userId;
    
    @Column(nullable = false)
    private LocalDateTime createTime;

    @Column(nullable = false)
    private String deletedYn;

    @Column(nullable = false)
    private String cafeId;

}
