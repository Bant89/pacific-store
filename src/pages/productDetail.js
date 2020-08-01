import React from "react"
import useShoppingCart from "hooks/useShoppingCart"
import { Layout } from "components/Layout"
import CarouselList from "components/CarouselList"
import ReviewList from "components/ReviewList"
import {
  Tag,
  TagContainer,
  ProductDetailImage,
  ProductDetailContainer,
  ProductDetailMultimedia,
  ProductDetailInfo,
  ProductDetailButton,
} from "styles/productDetail"

export default function ProductDetail() {
  const { addItem } = useShoppingCart()
  const handleAddButton = () => {
    let element = {
      name: "Amazing item",
      quantity: 5,
      price: 55.4,
      id: Math.random() * (100 - 1) + 1,
    }
    console.log("aqui")
    addItem(element)
  }
  return (
    <Layout>
      <ProductDetailContainer>
        <ProductDetailMultimedia>
          <h1>Product Detail</h1>
          <ProductDetailImage
            src="https://loremflickr.com/400/400"
            alt="product placeholder image"
          />
          <ProductDetailButton onClick={handleAddButton}>
            Add to cart
          </ProductDetailButton>
        </ProductDetailMultimedia>
        <ProductDetailInfo>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
            ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </p>
        </ProductDetailInfo>
        <TagContainer>
          <Tag>1 Tag</Tag>
          <Tag>2 Tag</Tag>
          <Tag>3 Tag</Tag>
          <Tag>4 Tag</Tag>
        </TagContainer>
      </ProductDetailContainer>
      <CarouselList title="Similar Products" />
      <h3>Reviews</h3>
      <button>Leave Review</button>
      <ReviewList />
    </Layout>
  )
}
