import React from "react"
import { Link } from "gatsby"
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <AmplifySignOut />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withAuthenticator(SecondPage)
