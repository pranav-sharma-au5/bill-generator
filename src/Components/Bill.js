import React, { Component } from 'react';
import UserDetails from "./UserDetails"
import { connect } from "react-redux"

import Cart from "./Cart"
import Menu from "./Menu"
import { Redirect } from 'react-router-dom';

class Bill extends Component {
  state = {}
  render() {
    const { waiterId, tableId } = this.props
    return (
      <div className=" container">
        {!waiterId && <Redirect to="/waiter" />}
        {!tableId && <Redirect to="/waiter" />}
        <div className="row justify-content-between ">
          <div className="col-lg-5 bg-details">
            <div className="row ">
              <UserDetails />

            </div>
            <div className="row">
              <Menu />
            </div>

          </div>
          <div className=" col-lg-5">
            <Cart />
          </div>
        </div>
      </div>);
  }
}

let mapState = (state) => {
  const { waiterId, tableId } = state.reducer
  return { waiterId, tableId }
}

export default connect(mapState)(Bill);
