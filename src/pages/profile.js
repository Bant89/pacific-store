import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"
import SEO from "components/seo"
import styled, { css } from "styled-components"

const Container = styled.div`
  margin: 1em auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-template-areas:
    "top"
    "bottom";
  column-gap: 5em;
  row-gap: 1em;
  @media (min-width: 768px) {
    grid-template-columns: 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "top bottom";
  }
`

const TextElement = styled.p`
  display: inline-block;
  font-size: 1.3em;

  ${props =>
    props.content &&
    css`
      color: rgba(255, 0, 255, 0.5);
    `}
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: bottom;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const TopInfo = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
`

export default function Profile() {
  return (
    <Layout>
      <SEO title="Profile" />
      <Container>
        <TopInfo>
          <TextElement>Profile</TextElement>
          <img src="https://loremflickr.com/250/150" alt="profilepic" />
          <TextElement>Name:</TextElement>
          <TextElement content>John Fisher</TextElement>
          <TextElement>Email:</TextElement>
          <TextElement content>asdad@gmail.com</TextElement>
          <button>Change Email</button>
        </TopInfo>
        <Stats>
          <Link to="/orders">80 Orders</Link>
          <Link to="/reviews">15 Reviews</Link>
        </Stats>
      </Container>
    </Layout>
  )
}
