import React from "react"
import styled from "styled-components"

export default function CategoryItem({ content }) {
    const gradients = [
        'rgba(251, 0, 0, .87), rgba(243, 192, 125, 1)',
        'rgba(251, 176, 0, .87), rgba(243, 125, 125, 1)',
        'rgba(255, 255, 16, .87), rgba(233, 37, 37, 1)',
        'rgba(20, 216, 6, .87), rgba(125, 188, 243, 1)',
        'rgba(49, 0, 251, .87), rgba(125, 243, 203, 1)',
        'rgba(234, 0, 251, .87), rgba(64, 88, 249, 1)',
        '#e66465, #9198e5'
    ]
    const getRandomInt = () => Math.floor(Math.random() * Math.floor(6))

    const Container = styled.div`
        background: linear-gradient(130deg, ${gradients[getRandomInt()]});
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        width: 160px;
        height: 160px;
        margin: 2em 2em 2em 0;
    `;

    return (
        <Container>
            <h3>{content}</h3>
        </Container>
    )
}