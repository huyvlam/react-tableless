import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TablelessHead extends Component {
  render() {
    return (
      <div
        style={{display: 'table-header-group'}}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

TablelessHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TablelessHead.defaultProps = {
  className: ''
}

export default TablelessHead
