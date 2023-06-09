import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { items, columns } = this.props;

    return (
      <tbody>
        {items?.map((item) => (
          <tr key={item._id}>
            {columns?.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
            <td>
              <Link to={`${item._id}`} style={{ textDecoration: "none" }}>
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
