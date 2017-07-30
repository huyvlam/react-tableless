import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tableless extends Component {
  render() {
    return (
      <div
        style={{display: 'table'}}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

Tableless.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Tableless.defaultProps = {
  className: ''
}

export default Tableless
