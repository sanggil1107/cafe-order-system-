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
@Table(name = "tb_board")
@NoArgsConstructor
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int boardId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = true)
    private int cnt;

    @Column(nullable = true)
    private String userId;
    
    @Column(nullable = true)
    private LocalDateTime createTime;

    @Column(nullable = true)
    private String deletedYn;

    @Column(nullable = true)
    private String cafeId;

}
