import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TablelessCell extends Component {
  render() {
    return (
      <div
        style={{display: 'table-cell'}}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

TablelessCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TablelessCell.defaultProps = {
  className: ''
}

export default TablelessCell
