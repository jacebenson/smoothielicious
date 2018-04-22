import React from 'react'
import Box from '../../components/Box'
import blueOrangeImg from '../../img/orangeBg.png'
import Header from '../../components/Header'
import './style.scss'

function AboutPage({ data }) {
  return (
    <Box>
      <Header imageSrc={blueOrangeImg} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Box html>{data.markdownRemark.html}</Box>
    </Box>
  )
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage