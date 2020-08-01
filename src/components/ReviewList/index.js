import React from "react"
import ReviewItem from "components/ReviewItem"
import { ReviewListContainer } from "./styles"
export default function ReviewList() {
  const reviews = []
  for (let i = 0; i < 4; i++) {
    reviews.push(<ReviewItem />)
  }
  return <ReviewListContainer>{reviews}</ReviewListContainer>
}
