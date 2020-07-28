import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"
import CarouselList from "components/CarouselList"
import ReviewList from "components/ReviewList"
import { Tag, TagContainer } from "pages/styles/productDetail.js"

export default function ProductDetail() {
  return (
    <Layout>
      <h1>Product Detail</h1>
      <button>Add to cart</button>
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        Lorem ipsum dolor Lorem ipsum dolor
      </p>
      <h3>Tags</h3>
      <TagContainer>
        <Tag>1 Tag</Tag>
        <Tag>2 Tag</Tag>
        <Tag>3 Tag</Tag>
        <Tag>4 Tag</Tag>
      </TagContainer>
      <CarouselList title="Similar Products" />
      <h3>Reviews</h3>
      <button>Leave Review</button>
      <ReviewList />
    </Layout>
  )
}
