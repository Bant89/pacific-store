import styled from "styled-components"

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
  margin: 1em 0;
  padding: 1em;
  max-width: 400px;
`

export const ReviewImage = styled.img`
  width: 75px;
  border-radius: 50%;
  display: inline-block;
`

export const ReviewProfile = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewerName = styled.h3`
  display: inline-block;
  font: 1.3em bold #333;
  width: 100px;
  margin-left: 1em;
`

export const ReviewerInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ReviewHeader = styled.div``

export const ReviewDetail = styled.p`
  text-align: justify;
  line-heigth: 1.1em;
  margin: 0;
  color: rgba(89, 92, 90, 0.8);
`
