import React from "react"
import ReviewItem from "components/ReviewItem"

export default function ReviewList() {
  const reviews = []
  for (let i = 0; i < 3; i++) {
    reviews.push(<ReviewItem />)
  }
  return <div>{reviews}</div>
}
