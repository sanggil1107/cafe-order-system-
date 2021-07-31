package cafeorder.service;

import java.util.List;
import java.util.Optional;

import cafeorder.entity.Board;

public interface BoardService {
  
  List<Board> selectBoardList() throws Exception;
  void saveBoard(Board board) throws Exception;
  Board selectBoardDetail(int boardId) throws Exception;
  void deleteBoard(int boardId) throws Exception;
  
}
