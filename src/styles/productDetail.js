import styled from "styled-components"

export const Tag = styled.span`
  width: auto;
  border: 1px solid #f50f0f;
  color: #f50f0f;
  background-color: rgba(247, 104, 104, 0.5);
  padding: 0.5em 1em;
  margin: 0.25em;
  display: inline-block;
  border-radius: 1em;
`

export const TagContainer = styled.div`
  display: flex;
  justify-items: space-between;
  grid-area: tags;
`

export const ProductDetailImage = styled.img`
  width: 400px;
  height: 400px;
  margin: 0.5em;
`

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    "multimedia description"
    "multimedia description"
    "multimedia tags";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "multimedia"
      "description"
      "tags";
  }
`

export const ProductDetailMultimedia = styled.div`
  grid-area: multimedia;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductDetailInfo = styled.div`
  grid-area: description;
`

export const ProductDetailButton = styled.button`
  color: white;
  background: rebeccapurple;
  font-size: 1.2em;
  padding: 0.5em;
  font-weigth: bolder;
  width: 300px;
  border: none;
  border-radius: 10px;
  &:hover {
    color: black;
    background: orange;
  }
`
