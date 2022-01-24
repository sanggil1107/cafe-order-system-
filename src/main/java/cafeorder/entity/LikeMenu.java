package cafeorder.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tb_likemenu")
@Data
public class LikeMenu {
	
	@EmbeddedId
	private LikeMenuPK pk;
	
	@MapsId("userId")
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@MapsId("productId")
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
    @Column(name = "likeyn")
    private String likeyn;

}
