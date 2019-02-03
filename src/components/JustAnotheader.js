// import React, { Component } from 'react'
// import { graphql } from 'gatsby'
// import Layout from

// export default class postLayout extends Component {
//     nesteSide = (slug) => {

//         // 1. Get slug from page
//         console.log(props.*slug)

//         // 2. Change slug to +1
//         const newPage = slug +1

//         // 3. change the page to /+1-page
//         this.props.push(`/store/${storeName}`)
//     }

//     render() {
//         return (
//             <button type="click" onClick={this.nesteSide} >Neste Side</button>

//         )
//     }
// }

// export const query = graphql`
//     query postQuery {
//         allSitePage {
//             edges {
//                 node {
//                     path

//                 }
//             }
//         }
//     }

// `

// export default nextPage

// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   keywords: [],
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

// export default nextPage

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `
