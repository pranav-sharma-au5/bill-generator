import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { getMenu, addToCart } from "../actionCreators/actions";
import { v4 as uuid } from "uuid";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {}

  componentDidMount() {
    this.props.getMenu()
  }

  render() {
    const { menu, addToCart, } = this.props
    return (
      <div className="col ">
        <h2 className="text-center">Menu</h2>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Add</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) =>
                <MenuItem addToCart={addToCart} key={uuid()} index={index} item={item} />
              )}
            </tbody>
          </table>
        </div>
      </div>);
  }
}


let mapState = (state) => {
  const { menu } = state.reducer
  return { menu }
}

let mapProps = (dispatch) => {
  return bindActionCreators({ getMenu, addToCart }, dispatch)
}
export default connect(mapState, mapProps)(Menu);
