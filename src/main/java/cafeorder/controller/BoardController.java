package cafeorder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cafeorder.entity.BoardEntity;
import cafeorder.service.BoardService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    // 리뷰 목록
    @RequestMapping(value = "/board", method = RequestMethod.GET)
    public List<BoardEntity> BoardList(Model model) throws Exception {
        return boardService.selectBoardList();
    }

    // 리뷰 작성 화면
    @RequestMapping(value = "/board/write", method = RequestMethod.GET)
    public String BoardWrite() throws Exception {
        return "boardwrite";
    }

    // 리뷰 작성
    @RequestMapping(value = "/board/write", method = RequestMethod.POST)
    public void InsertBoard(@RequestBody BoardEntity boardEntity) throws Exception {
        boardService.saveBoard(boardEntity);
    }

    // 리뷰 상세 화면
    @RequestMapping(value = "/board/detail", method = RequestMethod.GET)
    public BoardEntity BoardDetail(@RequestParam("boardId") int boardId) throws Exception {
        return boardService.selectBoardDetail(boardId);
    }

    // 리뷰 수정
    @RequestMapping(value = "/board/update", method = RequestMethod.PUT)
    public void UpdateBoard(@RequestBody BoardEntity boardEntity) throws Exception {
        boardService.saveBoard(boardEntity);
    }

    // 리뷰 삭제
    @DeleteMapping(value = "/board/delete")
    public void DeleteBoard(@RequestParam("boardId") int boardId) throws Exception {
        System.out.println(boardId);
        boardService.deleteBoard(boardId);
    }

}
