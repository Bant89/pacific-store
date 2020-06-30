import React from "react"
import { IoIosStar } from "react-icons/io"
import { FaDollarSign } from "react-icons/fa"
import {
  Card,
  ProductName,
  ProductImage,
  DetailContainer,
  DetailInfo,
} from "./styles"
export default function GridItem() {
  return (
    <Card>
      <ProductImage
        src="https://loremflickr.com/150/150"
        alt="placeholderImage"
      />
      <ProductName> Name of product </ProductName>
      <DetailContainer>
        <DetailInfo>
          <IoIosStar color="orange" />
          4.8 Rate
        </DetailInfo>
        <DetailInfo>
          <FaDollarSign color="green" /> 500.30 Price
        </DetailInfo>
      </DetailContainer>
    </Card>
  )
}