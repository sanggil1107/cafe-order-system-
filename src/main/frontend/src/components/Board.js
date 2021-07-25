import React from 'react';
import { Link } from 'react-router-dom';
import './board.css'

const Board = ({boards}) => {

    return (
        <div class="container">
            <div class="container">
                <h2>게시글 목록</h2>
                <table class="board_list">
                    <colgroup>
                        <col width="15%" />
                        <col width="*" />
                        <col width="15%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">글번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">조회수</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        { boards && boards.map((board, i) => (
                            <tr>
                                <td>{board.boardId}</td>
                                <td class="title">
                                    <Link to={`/news/board/view/${board.boardId}`}>{board.title}</Link>
                                </td>
                                <td>{board.cnt}</td>
                                <td>{board.createTime}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <Link to="/news/board/write">
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Board;