package cafeorder.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@Data
public class LikeMenuPK implements Serializable {

	//@ManyToOne(fetch = FetchType.EAGER)
    //@JoinColumn(name = "user_id")
    //@Column(name = "user_id")
	private String userId;

    //@ManyToOne(fetch = FetchType.EAGER)
    //@JoinColumn(name = "product_id")
    //@Column(name = "product_id")
    private int productId;

}
