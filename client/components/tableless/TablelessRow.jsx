import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TablelessRow extends Component {
  render() {
    return (
      <div
        style={{display: 'table-row'}}
        className="grid-row"
      >
        {this.props.children}
      </div>
    )
  }
}

TablelessRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TablelessRow.defaultProps = {
  className: ''
}

export default TablelessRow
