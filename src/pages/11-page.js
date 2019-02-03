import React from 'react'
import Layout from '../components/layout'
// import Header from '../components/header'
import { Link } from 'gatsby'
import gangster from '../images/neste_side_Kris_norsk_text.png'
import Samuel from '../images/11_norsk.png'

const nextPage = '/12-page'

const nesteSide = props => {
  // 1. Get slug from page
  console.log(props.path)

  // 2. Change slug to +1
  //const newPage = slug +1

  // 3. change the page to /+1-page
  //this.props.push(`/store/${storeName}`)
}

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
          width: '300px',
          padding: `0px`,
          marginBottom: `0rem`,
        }}
        src={gangster}
        alt="Gatsby astronaut"
      />
    </Link>
    <img
      style={{
        width: '900px',
        padding: `0px`,
      }}
      src={Samuel}
      alt="Sjiraffen Samuel"
    />
  </Layout>
)

export default About
