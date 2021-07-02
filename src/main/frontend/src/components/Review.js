import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewService from '../service/ReviewService';
import './review.css'

const Review = () => {

    const [reviews, setReviwes] = useState([]);

    useEffect(() => {
        const data = ReviewService.getReviews();
        console.log(data.data);
        setReviwes(data.data);
    }, [])

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
                        { reviews && reviews.map((review, i) => (
                            <tr>
                                <td>{review.boardIdx}</td>
                                <td class="title">
                                    <Link to="/insert">{review.title}</Link>
                                </td>
                                <td>hitCnt</td>
                                <td>time</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <a href="/board/Write" class="btn">글 쓰기</a>
                <Link to="/write">
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Review;