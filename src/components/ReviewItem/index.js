import React from "react"
import { IoIosStar } from "react-icons/io"
import {
  ReviewContainer,
  ReviewerInfo,
  ReviewDetail,
  ReviewImage,
  ReviewerName,
  ReviewProfile,
} from "./styles"
import avatarPlaceholder from "../../static/images/avatarPlaceholder.jpg"

export default function ReviewItem() {
  return (
    <ReviewContainer>
      <ReviewProfile>
        <ReviewImage
          src={avatarPlaceholder}
          alt="placeholderImage"
        />
        <ReviewerName>Name</ReviewerName>
      </ReviewProfile>
      <ReviewerInfo>
        <h4>05/06/19</h4>
        <h4>
          <IoIosStar color="orange" /> 4.5
        </h4>
      </ReviewerInfo>
      <ReviewDetail>
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
      </ReviewDetail>
    </ReviewContainer>
  )
}
