import React from 'react'
import Layout from '../components/layout'
// import Header from '../components/header'
import { Link } from 'gatsby'
import gangster from '../images/gatsby-astronaut.png'
import Samuel from '../images/1_norsk.png'

const nextPage = '/page-2'

const About = () => (
  <Layout>
    <Link
      to={nextPage}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img
        style={{
          width: '100px',
        }}
        src={gangster}
        alt="Gatsby astronaut"
      />
    </Link>
    <img
      style={{
        width: '900px',
      }}
      src={Samuel}
      alt="Sjiraffen Samuel"
    />
  </Layout>
)

export default About
