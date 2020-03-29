import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { removeItem, generateBill, validate } from "../actionCreators/actions";
import { v4 as uuid } from "uuid";
import CartItem from "./CartItem";
class Cart extends Component {
  state = {}

  checkDetails(data) {
    const { username, userMobile, total } = data
    if (username && userMobile && total) {
      this.props.generateBill(data)
    }
    else {
      this.props.validate()
    }
  }

  render() {
    const { cart, removeItem, total, wholeState, isValid } = this.props
    return (<div className="col h-100 position-relative bg-cart ">
      <h2 className="text-center">Cart</h2>
      <table className="table  table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) =>
            <CartItem removeItem={removeItem} key={uuid()} index={index} item={item} />
          )}
          {cart.length === 0 && <tr>
            <td> </td>
            <td>Add</td>
            <td>your</td>
            <td>items</td>
            <td>here!</td>
          </tr>}
        </tbody>
      </table>
      {!isValid && !total && <div className="alert alert-danger">No items in your Cart</div>}
      <div className="col mb-5 bottom total">
        <h5 className="d-inline">Total Price :</h5>
        <h5 className=" float-right mr-4"> <i className="fa fa-rupee"></i> {total}</h5>
      </div>
      <div className="col mb-3 bottom ">
        <button onClick={() => this.checkDetails(wholeState)} className="btn mr-4  btn-outline-light col-11">Generate Bill</button>
      </div>
    </div>);
  }
}

let mapState = (state) => {
  const wholeState = state.reducer
  const { cart, total, isValid } = state.reducer
  return { cart, total, wholeState, isValid }
}

let mapProps = (dispatch) => {
  return bindActionCreators({ removeItem, generateBill, validate }, dispatch)
}
export default connect(mapState, mapProps)(Cart);
