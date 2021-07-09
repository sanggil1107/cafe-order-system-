import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewService from '../service/ReviewService';
import Paging from './Paging';
import './review.css'

const Review = () => {

    const [ reviews, setReviwes ] = useState([]);

    useEffect(() => {
        ReviewService.getReviewlist().then(res => {
            setReviwes(res.data);
        });
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
                        { reviews && reviews.slice(0).reverse().map((review, i) => (
                            <tr>
                                <td>{review.reviewId}</td>
                                <td class="title">
                                    <Link to={`/write/${review.reviewId}`}>{review.title}</Link>
                                </td>
                                <td>{review.cnt}</td>
                                <td>{review.createTime}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <Paging/>
                <Link to="/write">
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Review;