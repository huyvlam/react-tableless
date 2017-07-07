import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TablelessFoot extends Component {
  render() {
    return (
      <div
        style={{display: 'table-footer-group'}}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

TablelessFoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TablelessFoot.defaultProps = {
  className: ''
}

export default TablelessFoot
