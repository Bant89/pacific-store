import React from 'react'
import { Link } from 'gatsby'
import { Layout } from "components/Layout"
import CarouselList  from "components/CarouselList"
import ReviewList from "components/ReviewList"
export default function ProductDetail() {
    return (
        <Layout>
        <h1>Product Detail</h1>
        <button>Add to cart</button>
        <h3>Description</h3>
        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
        <h3>Tags</h3>
        <span>1 Tag</span>
        <span>2 Tag</span>
        <span>3 Tag</span>
        <span>4 Tag</span>
        <CarouselList title="Similar Products"/>
        <h3>Reviews</h3>
        <button>Leave Review</button>
        <ReviewList />
        </Layout>
    )
}