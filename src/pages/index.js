import React from "react"
import Layout from "../components/Layout/Layout"
import LandingImg from '../components/LandingImg/LandingImg'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Services/>
    {/* <LandingImg/> */}
  </Layout>
)

export default IndexPage
