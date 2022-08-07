import { notifyError } from 'js/ToastNotify';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import * as MoviesService from 'Service/API';
import { getScroll } from "js/ScrollBy";
import {ReviewsList,ReviewItem,AuthorReview,ReviewStyle,NotReviews} from './Reviews.styled';

const Reviews=()=>{

    const [reviews,setReviews]=useState([]);

    let {movieId}=useParams();

useEffect(()=>{
const getReviews=async(movieId)=>{
    try{
        const {results:reviews}= await MoviesService.fetchReviewMovie(movieId)
        setReviews([...reviews])
        getScroll()
    } catch {notifyError()}
return ()=>setReviews([])}
    getReviews(movieId)
},[movieId])

useEffect(()=>getScroll(),[reviews])

    return(<ReviewsList >
        {reviews.length !==0 ? 
        reviews.map(review=>{
            const {id,author,content}=review;
            return(<ReviewItem key={id}>
                <AuthorReview>Author: {author}</AuthorReview>
                <ReviewStyle>{content}</ReviewStyle>
            </ReviewItem>)
        })
        :<NotReviews>We don`t have any reviews for this video.</NotReviews>}
    </ReviewsList>)
}

export default Reviews