import React, { Component } from 'react'

import {
  Tableless,
  TablelessBody,
  TablelessCell,
  TablelessFoot,
  TablelessHead,
  TablelessRow
} from './tableless'

class App extends Component {
  render() {
    return (
      <Tableless>
        <TablelessBody>
          <TablelessRow>
            <TablelessCell>Body Row 1 Cell 1</TablelessCell>
            <TablelessCell>Body Row 1 Cell 2</TablelessCell>
            <TablelessCell>Body Row 1 Cell 3</TablelessCell>
            <TablelessCell>Body Row 1 Cell 4</TablelessCell>
            <TablelessCell>Body Row 1 Cell 5</TablelessCell>
          </TablelessRow>
          <TablelessRow>
            <TablelessCell>Body Row 2 Cell 1</TablelessCell>
            <TablelessCell>Body Row 2 Cell 2</TablelessCell>
            <TablelessCell>Body Row 2 Cell 3</TablelessCell>
            <TablelessCell>Body Row 2 Cell 4</TablelessCell>
            <TablelessCell>Body Rows 2 Cell 5</TablelessCell>
          </TablelessRow>
        </TablelessBody>

        <TablelessFoot>
          <TablelessCell>Foot 1</TablelessCell>
          <TablelessCell>Foot 2</TablelessCell>
          <TablelessCell>Foot 3</TablelessCell>
          <TablelessCell>Foot 4</TablelessCell>
          <TablelessCell>Foot 5</TablelessCell>
        </TablelessFoot>

        <TablelessHead>
          <TablelessCell>Head 1</TablelessCell>
          <TablelessCell>Head 2</TablelessCell>
          <TablelessCell>Head 3</TablelessCell>
          <TablelessCell>Head 4</TablelessCell>
          <TablelessCell>Head 5</TablelessCell>
        </TablelessHead>
      </Tableless>
    )
  }
}

export default App
