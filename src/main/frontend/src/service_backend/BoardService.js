import axios from 'axios';

const BOARD_API_URL = "http://localhost:8080/board";

class BoardService {
    
    // 리뷰 목록
    getBoardlist() {
        return axios.get(BOARD_API_URL);
    };

    // 리뷰 작성
    insertBoard(board) {
        return axios.post(BOARD_API_URL + "/write", board);
    };

    // 리뷰 상세
    getBoard(boardId) {
        return axios.get(BOARD_API_URL + "/detail", {
            params: {
                boardId: boardId
            }
        });
        //return axios.get(REVIEW_API_URL + "/detail", reviewId)
    };

    // 리뷰 수정
    updateBoard(board) {
        return axios.put(BOARD_API_URL + "/update", board);
    };

    // 리뷰 삭제
    deleteBoard(boardId) {
        return axios.delete(BOARD_API_URL + "/delete", {
            params: {
                boardId: boardId,
            }
        });
    };
}

export default new BoardService();