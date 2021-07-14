import React, { useState, useEffect } from 'react';
import ReviewService from '../service/ReviewService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Paging from './Paging';
import Review from './Review';
import ReviewDetail from './ReviewDetail';
import ReviewWrite from './ReviewWrite';


const ReviewMain = () => {
    
    const [ reviews, setReviwes ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ reviewsPerPage, setReviewsPerPage ] = useState(10);

    const indexOfLast = currentPage * reviewsPerPage;
    const indexofFirst = indexOfLast - reviewsPerPage;

    const currentReview = () => {
        console.log(reviews);
        let reverse_review = [...reviews].reverse();
        //let reverse_review = [...reviews].reverse();
        var currentReviews = 0 ;
        currentReviews = reverse_review.slice(indexofFirst, indexOfLast);
        console.log(reviews);
        console.log(reverse_review);
        console.log(currentReviews);

        return currentReviews;
    }
    useEffect(() => {
        ReviewService.getReviewlist().then(res => {
            setReviwes(res.data); 
        });

    }, [])
    
    return (
        <div>
            
            <Review reviews={currentReview()}></Review>
            <Paging page={currentPage} count={reviews.length} setPage={setCurrentPage}></Paging>
{/* 
            <Router>
                <Switch>
                    <Route exact path="/review/view/:id" component={ReviewDetail}></Route>
                    <Route exact path="/review/write" component={ReviewWrite}></Route>
                </Switch>
            </Router> */}

        </div>
    );
}

export default ReviewMain;