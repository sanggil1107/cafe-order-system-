package cafeorder.service;

import java.util.List;
import java.util.Optional;

import cafeorder.entity.BoardEntity;

public interface BoardService {
  
  List<BoardEntity> selectBoardList() throws Exception;
  void saveBoard(BoardEntity boardEntity) throws Exception;
  BoardEntity selectBoardDetail(int boardId) throws Exception;
  void deleteBoard(int boardId) throws Exception;
  
}
