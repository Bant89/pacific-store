/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure({
  Auth: {
    identityPoolId: awsConfig.aws_cognito_identity_pool_id,
    region: awsConfig.aws_cognito_region,
  },
})
// Amplify.configure(awsConfig)
