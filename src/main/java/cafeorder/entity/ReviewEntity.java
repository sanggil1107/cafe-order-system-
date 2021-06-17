package cafeorder.entity;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewEntity {

  private int reviewId;
  private String title;
  private String contents;
  private int cnt;
  private String userId;
	private LocalDateTime createTime;
	private String deletedYn;
  private String cafeId;

}
