package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_likemenu")
public class LikeMenu {
	
	@EmbeddedId
	private LikeMenu pk;
	
    @Column(name = "likeyn")
    private String likeyn;

}
