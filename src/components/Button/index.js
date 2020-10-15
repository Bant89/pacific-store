import React from "react"
import { StyledButton, InactiveButton, SecondaryButton, InactiveSecondaryButton } from "./styles"


export default function Button({ children, type, onClick, theme }) {

    if (theme === "inactive-primary") {
        return (<InactiveButton type={type === "submit" ? "submit" : "button"} onClick={onClick} >{children}</InactiveButton>)
    } else if (theme === "secondary") {
        return (<SecondaryButton type={type === "submit" ? "submit" : "button"} onClick={onClick} >{children}</SecondaryButton>)
    } else if (theme === "inactive-secondary") {
        return (<InactiveSecondaryButton type={type === "submit" ? "submit" : "button"} onClick={onClick} >{children}</InactiveSecondaryButton>)
    }
    return (<StyledButton type={type === "submit" ? "submit" : "button"} onClick={onClick} >{children}</StyledButton>)


}