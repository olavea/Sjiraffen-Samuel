import React from 'react'
import Layout from '../components/layout'
// import Header from '../components/header'
import { Link } from 'gatsby'
import gangster from '../images/neste_side_Kris_norsk_text.png'
// import gangster2 from '../images/neste_side1_norsk.jpg'
import Samuel from '../images/4_norsk.png'

const nextPage = '/5-page'

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
          marginBottom: `0rem`,
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
// deleted from line 27
// <img
//         style={{
//           width: '200px',
//         }}
//         src={gangster2}
//         alt="Gatsby astronaut"
//       />
