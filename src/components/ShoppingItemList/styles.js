import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
  }
`

export const Summary = styled.div`
  background-color: lightblue;
`
