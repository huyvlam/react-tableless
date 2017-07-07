import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TablelessBody extends Component {
  render() {
    return (
      <div
        style={{display: 'table-row-group'}}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

TablelessBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TablelessBody.defaultProps = {
  className: ''
}

export default TablelessBody
