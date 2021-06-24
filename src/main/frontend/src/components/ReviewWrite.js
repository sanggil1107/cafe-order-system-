import React from 'react';
import './review.css'

const ReviewWrite = (props) => {
    return (
        <div class="container">
            <h2>게시판 등록</h2>
            <form id="frm" name="frm" method="POST" action="/board/Insert" enctype="multipart/form-data">
                <table class="board_detail">
                    <tr>
                        <td>제목</td>
                        <td><input type="text" id="title" name="title" /></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea name="contents" id="contents"></textarea>
                        </td>
                    </tr>
                </table>
                <input type="file" id="files" name="files" multiple="multiple" />
                <input type="submit" id="submit" value="저장" class="btn" />
                <input type="button" id="cancel" value="취소" class="btn" onClick={() => props.history.goBack()}/>
            </form>
        </div>
    );
}

export default ReviewWrite;