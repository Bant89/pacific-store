import styled from "styled-components"
import { COLORS } from "utils/constants"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    height: 45vh;
    margin-top: 1em;
    padding: 1em;
    border-radius: 20px;
    background-color: ${COLORS.background.inactiveSecondary};
    & > h3 {
        color: ${COLORS.foreground.primary}
    }

    @media(max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }

`

export const MainImage = styled.img`
    border-radius: 15%;
    width: 30%;
    height: 80%;
    
    @media(max-width: 768px) {
        width: 100%;
    }
`

export const SectionList = styled.section`
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    
    @media(max-width: 768px) {
        width: 100%;
    }
`

export const ProductItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    p {
        font-weight: bolder;
    }
`

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`
