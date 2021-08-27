package cafeorder.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cafeorder.entity.Board;
import cafeorder.repository.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardRepository boardRepository;
    
    // 리뷰 목록
    @Override
    public List<Board> selectBoardList() throws Exception {
        return boardRepository.findAll();
    }

    // 리뷰 작성 or 수정
    @Override
    public void saveBoard(Board boardEntity) throws Exception {
        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        boardEntity.setCreateTime(LocalDateTime.parse(now, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) );
        boardEntity.setCnt(boardEntity.getCnt() + 1);
        boardRepository.save(boardEntity);
    }

    // 리뷰 상세 화면
    @Override
    public Board selectBoardDetail(int boardId) throws Exception {

        Optional<Board> op = boardRepository.findById(boardId);
        if(op.isPresent()) {
            Board boardEntity = op.get();
            boardEntity.setCnt(boardEntity.getCnt() + 1);
            boardRepository.save(boardEntity);
            return boardEntity;
        }
        else {
            throw new Exception();
        }
        
    }

    // 리뷰 삭제
    @Override
    public void deleteBoard(int boardId) throws Exception {
        boardRepository.deleteById(boardId);
    }
}
