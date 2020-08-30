import React from "react"
import { StyledButton } from "./styles"
export default function Button({ children, type, onClick }) {
    return (<StyledButton type={type === "submit" ? "submit" : "button"} onClick={onClick} >{children}</StyledButton>)
}