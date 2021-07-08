import React from 'react';
import './review.css'
import { useState } from 'react';
import ReviewService from '../service/ReviewService';

const ReviewWrite = (props) => {

    const [review, setReview] = useState({
        title: '',
        contents: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        console.log(name, value);
        setReview({
            ...review,
            [name]: value,
        });
        console.log(review);
    }

    const onSubmit = () => {
        ReviewService.insertReview(review).then(res => {
            //props.history.push('/');  ??
            props.history.goBack();
        });
    }

    return (
        <div class="container">
            <h2>게시판 등록</h2>
            <form id="frm" name="frm">
                <table class="board_detail">
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td><input type="text" id="title" name="title" onChange={getValue}/></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <textarea name="contents" id="contents" onChange={getValue}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="file" id="files" name="files" multiple="multiple" />
                <input type="submit" id="submit" value="저장" class="btn" onClick={onSubmit} />
                <input type="button" id="cancel" value="취소" class="btn" onClick={() => props.history.goBack()}/>
            </form>
        </div>
    );
}

export default ReviewWrite;