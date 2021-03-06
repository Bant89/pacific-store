import React from "react"
import { Link } from "gatsby"
import { IoIosStar } from "react-icons/io"
import { FaDollarSign, FaConciergeBell } from "react-icons/fa"
import {
  Card,
  ProductName,
  ProductImage,
  DetailContainer,
  DetailInfo,
} from "./styles"
import storePlaceholder from "../../static/images/storePlaceholder.jpg"
export default function GridItem({
  type = "product",
  name = "product",
  rate = "4.8",
  price = "55.5",
  orders = "100",
}) {
  const icon =
    type === "product" ? (
      <FaDollarSign color="green" />
    ) : (
        <FaConciergeBell color="red" />
      )
  const text = type === "product" ? `${price} Price` : `${orders} Orders`
  return (
    <Card>
      <Link to="/products/detail">
        <ProductImage
          src={storePlaceholder}
          alt="placeholderImage"
        />
        <ProductName> Name of {name} </ProductName>
      </Link>
      <DetailContainer>
        <DetailInfo>
          <IoIosStar color="orange" />
          {rate} Rate
        </DetailInfo>
        <DetailInfo>
          {icon}
          {text}
        </DetailInfo>
      </DetailContainer>
    </Card>
  )
}
