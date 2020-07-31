import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  width: 35vw;
  max-width: 550px;
  outline: 1px solid red;
  margin: 0.5em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledInput = styled.input`
  max-width: 50px;
  margin: 0 0.5em;
  text-align: center;
  @media (min-width: 768px) {
    margin: 0.5em 0;
  }
`

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  align-self: center;
`

export const ItemInfoSection = styled.div`
  color: rebeccapurple;
`

export const QuantityButton = styled.button`
  max-width: 50px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
`

export const ItemButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`
