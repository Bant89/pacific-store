import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  paddign: 0.5em;
  margin: 10px;
  -webkit-box-shadow: 4px 6px 3px -1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 4px 6px 3px -1px rgba(0, 0, 0, 0.29);
  box-shadow: 4px 6px 3px -1px rgba(0, 0, 0, 0.29);
`
export const ProductName = styled.h3`
  font-size: 1em;
  margin: 0;
`

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0.5em 0;
`

export const DetailContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`

export const DetailInfo = styled.h4`
  padding: 0.2em;
  text-align: center;
  margin: 0.5em 0;
`
