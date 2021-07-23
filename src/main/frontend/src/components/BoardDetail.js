import React from 'react';
import { useState, useEffect } from 'react';
import BoardService from '../service/BoardService';
import './board.css'

const BoardDetail = (props) => {

    const [ board, setBoard ] = useState({
        title: '',
        contents: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        console.log(board);
        console.log(e.target.value);
        setBoard({
            ...board,
            [name]: value
        });
    }

    const onUpdate = () => {
        BoardService.updateBoard(board).then(res => {
            console.log(res.data);
            props.history.goBack();
        })
        .catch(err => {
            console.log(err);
        });
    }

    const onDelete = (Id) => {
        BoardService.deleteBoard(Id).then(res => {
            console.log(res.data);
            props.history.goBack();
        })
    }

    useEffect(() => {
        const Id  = props.match.params.id;
        BoardService.getBoard(Id).then(res => {
            console.log(res.data);
            setBoard(res.data);
        });
    }, [props.match.params.id])

    return (
        <div class="container">
            <h2>게시글 상세 화면</h2>
            <form id="frm" method="POST">
                <table class="board_detail">
                    <colgroup>
                        <col width="15%" />
                        <col width="35%" />
                        <col width="15%" />
                        <col width="35%" />
                    </colgroup>
                    <caption>게시글 상세 내용</caption>
                    <tbody>
                        <tr>
                            <th scope="row">글 번호</th>
                            <td>{board.reviewId}</td>
                            <th scope="row">조회수</th>
                            <td>{board.cnt}</td>
                        </tr>
                        <tr>
                            <th scope="row">작성자</th>
                            <td></td>
                            <th scope="row">작성일</th>
                            <td>{board.createTime}</td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colspan="3">
                                <input type="text" id="title" name="title" value={board.title} onChange={getValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" class="view_text">
                                <textarea name="contents" id="contents" title="내용" value={board.contents} onChange={getValue}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" name="boardIdx" />
                <input type="hidden" id="method" name="_method" />
            </form>
            {/* <div class="file_list" >
              
            </div> */}
            <br></br>
            <button onClick={() => props.history.goBack()}>목록으로</button>
            <button onClick={onUpdate}>수정하기</button>
            <button onClick={() => {onDelete(props.match.params.id)}}>삭제하기</button>
        </div>
    );
}

export default BoardDetail;