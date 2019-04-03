// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
// import React from 'react'
// import g from '../images/gatsby-icon.png'
// import styled from

// const nextPage = '/about'

// // const HeaderWrapper = styled.div`
// //   background: #524763;
// //   margin bottom: 1.45rem,

// // `;

// const Header = ({ siteTitle }, props) => (
//   <div
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 60,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to={'/'}
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           <img src={g} alt="Gatsby Logo" />
//         </Link>
//         {/*        <h3 className="nextPages">
//           <span>{props.nextPages}</span>
//         </h3>
//         */}{' '}
//       </h1>
//     </div>
//   </div>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

{
  /*
    24        to={this.props.nextPages}
    45  can I put my props here?

   */
}

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
