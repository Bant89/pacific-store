import React from "react"
import { Link } from "gatsby"
import { Auth } from "aws-amplify"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CheckUser = () => {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.error(err))
}

const SignOut = () => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <button onClick={() => Auth.federatedSignIn()}>Sign In</button> <br />
    <button onClick={SignOut}>Sign Out</button> <br />
    <button onClick={CheckUser}>Check User</button> <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
