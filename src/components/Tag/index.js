import React from "react"
import { Container } from "./styles"

export default function Tag({ children, selected }) {
    return (
        <Container selected={selected ? true : false}>
            {children}
        </Container>
    )
}