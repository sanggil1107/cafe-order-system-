import React from 'react';
import { useState, useEffect } from 'react';
import ReviewService from '../service/ReviewService';
import './review.css'

const ReviewDetail = (props) => {

    const [ review, setReview ] = useState({
        title: '',
        contents: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        console.log(review);
        console.log(e.target.value);
        setReview({
            ...review,
            [name]: value
        });
    }

    const onUpdate = () => {
        ReviewService.updateReview(review).then(res => {
            console.log(res.data);
            props.history.push('/');
        });
    }

    const onDelete = (Id) => {
        ReviewService.deleteReview(Id).then(res => {
            console.log("삭제 성공");
            props.history.push('/');
        })
    }

    useEffect(() => {
        const Id  = props.match.params.id;
        ReviewService.getReview(Id).then(res => {
            console.log(res.data);
            setReview(res.data);
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
                            <td>{review.reviewId}</td>
                            <th scope="row">조회수</th>
                            <td>{review.cnt}</td>
                        </tr>
                        <tr>
                            <th scope="row">작성자</th>
                            <td></td>
                            <th scope="row">작성일</th>
                            <td>{review.createTime}</td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colspan="3">
                                <input type="text" id="title" name="title" value={review.title} onChange={getValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" class="view_text">
                                <textarea name="contents" id="contents" title="내용" value={review.contents} onChange={getValue}/>
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
            <button onClick={onDelete}>삭제하기</button>
        </div>
    );
}

export default ReviewDetail;