import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './review.css'

const Review = ({reviews}) => {

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
                                <td>{review.reviewId}</td>
                                <td class="title">
                                    <Link to={`/review/view/${review.reviewId}`}>{review.title}</Link>
                                </td>
                                <td>{review.cnt}</td>
                                <td>{review.createTime}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <Link to="/review/write">
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default Review;