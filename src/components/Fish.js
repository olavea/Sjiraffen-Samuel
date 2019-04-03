import React from 'react'

class Fish extends React.Component {
  render() {
    // const { image, name } = this.props.details

    return (
      <li className="menu-fish">
        <Fish />
      </li>
    )
  }
}

export default Fish
// <img src={this.props.details.image} alt={this.props.details.name} />
