import * as React from 'react'
import Layout from "/src/components/layout.js"
import { StaticImage } from "gatsby-plugin-image"

const imageStyle = {
  width: 300,
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm Muhammad from Anchih</p>
      <StaticImage style={imageStyle} alt="Text" src="../images/ava_green.jpg" />
    </Layout>
  )
}

export default IndexPage


