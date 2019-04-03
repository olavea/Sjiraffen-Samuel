import React from 'react'
import Layout from '../components/layout'
// import Header from '../components/header'
import { Link } from 'gatsby'
import gangster from '../images/neste_side_Kris_norsk_text.png'
import Samuel from '../images/2_norsk.png'
import AppWes from '../components/AppWes'

const nextPage = '/3-page'
const thisPage = '/2-page'

const TwoPage = () => (
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
          width: '800px',
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
    <AppWes denneSiden="/2-page" />
  </Layout>
)

export default TwoPage
