import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import g from '../images/gatsby-icon.png'
import styled from

const nextPage = '/about'

// const HeaderWrapper = styled.div`
//   background: #524763;
//   margin bottom: 1.45rem,

// `;

const Header = ({ siteTitle }, props) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 60,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={'/'}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={g} alt="Gatsby Logo" />
        </Link>
        {/*        <h3 className="nextPages">
          <span>{props.nextPages}</span>
        </h3>
        */}{' '}
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

{
  /*
    24        to={this.props.nextPages}
    45  can I put my props here?

   */
}
