import React from "react"
import Layout from "../components/Layout/Layout"
// import LandingImg from '../components/LandingImg/LandingImg'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import ContactForm from "../components/ContactForm/ContactForm"
import SEO from "../components/seo"
import Infographics from "../components/Infographics/Infographics"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Infographics/>
    <Services/>
    <ContactForm name='home-contact'/>
  </Layout>
)

export default IndexPage
