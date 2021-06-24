import React from 'react';
import ReviewDetail from './ReviewDetail';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './review.css'

const Review = () => {
    const handleClick = (e) => {
        e.preventDefault();
        alert('dd');
        <ReviewDetail></ReviewDetail>
    }

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
                        {/* <tr th:if="${#lists.size(list)} > 0" th:each="list : ${list}">
                            <td th:text="${list.boardIdx}"></td>
                            <td class="title">
                                <a href="/board/Detail?boardIdx=" th:attrappend="href=${list.boardIdx}" th:text="${list.title}"></a>
                            </td>
                            <td th:text="${list.hitCnt}"></td>
                            <td th:text="${#temporals.format(list.createTime, 'yyyy-MM-dd HH:mm::ss')}"></td>
                        </tr>
                        <tr th:unless="${#lists.size(list)} > 0">
                            <td colspan="4">조회된 결과가 없습니다.</td>
                        </tr> */}
                        <tr>
                            <td>boardIdx</td>
                            <td class="title">
                                <Link to="/insert">title</Link>
                            </td>
                            <td>hitCnt</td>
                            <td>time</td>
                        </tr>
                    </tbody>
                </table>
                <a href="/board/Write" class="btn">글 쓰기</a>
                <Link to="/write">
                    <button>글 쓰기</button>
                </Link>
                {/* <Router>
                    <Switch>
                        <Route exact path="/" component={Review}></Route>
                        <Route exact path="/insert" component={ReviewDetail}></Route>
                    </Switch>
                </Router> */}
            </div>
        </div>
    );
}

export default Review;