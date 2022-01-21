package cafeorder.entity;

import java.io.Serializable;


import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
public class LikeMenuPK implements Serializable{

    //@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User userId;

    //@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product productId;

}
