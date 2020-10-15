import React from "react"
import styled from "styled-components"

export default function LongCardList({ items = [] }) {

    const Container = styled.div`
        position: relative;
        margin: 1em 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;    
        width: 70vw;
        height: auto;
    `;

    const HeadContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 80%;
        height: 100%;
        margin: 0 auto;
  `;

    return (
        <Container>
            <HeadContainer>
                <h3>Mejor valoradas</h3>
                <h3>Ver más</h3>
            </HeadContainer>
            {items}
        </Container>
    )
}