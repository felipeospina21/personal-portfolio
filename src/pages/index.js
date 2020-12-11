import React from "react"
import Layout from "../components/Layout/Layout"
import LandingImg from '../components/LandingImg/LandingImg'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingImg/>
  </Layout>
)

export default IndexPage
