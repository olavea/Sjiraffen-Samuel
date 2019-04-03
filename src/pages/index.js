import React from 'react'
import PagePicker from '../components/PagePicker'
import AppWes from '../components/AppWes'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <PagePicker />
          <AppWes />
        </div>
        <Link to="/1-page/">Go to page 1</Link>
      </Layout>
    )
  }
}

export default IndexPage
