import styled from "styled-components"

export const NormalInput = styled.input`
  background: transparent;
  margin-bottom: 0.5em;
  border: 0;
  outline: 0;
  border-bottom: 1px solid black;
  max-width: 315px;
`

export const Label = styled.label`
  text-transform: uppercase;
  color: #a590ad;
  display: block;
  max-width: 305px;
`

export const ErrorMessage = styled.p`
  display: block;
  color: red;
  text-shadow: 1px 1px #333333;
  margin-bottom: 0;
  max-width: 305px;
`
