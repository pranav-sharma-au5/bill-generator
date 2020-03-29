import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setUsername, setUserMobile, setpaymentMode } from "../actionCreators/actions";
class UserDetails extends Component {
  state = {}

  setpayment = (e) => {
    this.props.setpaymentMode(e)
  }

  render() {
    const { username, userMobile, setUsername, setUserMobile, paymentMode, isValid } = this.props
    const { setpayment } = this

    return (<div className="col ">
      <h3 className="text-center">Customer Details</h3>
      <hr className="bg-white" />
      <form noValidate className={isValid ? "" : "was-validated"}>

        <div className="form-group">
          <label className="col position-relative " htmlFor="Customer Name">
            Customer Name
            <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter Customer Name" id="" required />
            <div className="invalid-feedback position-absolute text-right ">Invalid username </div>
            <div className="valid-feedback position-absolute text-right ">Looks Good </div>
          </label>
        </div>
        <div className="form-group">
          <label className="col position-relative" htmlFor="Customer Mobile">
            Customer Mobile
          <input type="phone" minLength="10" pattern="[0-9]{10}" maxLength="10" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} name="" className="form-control" placeholder="Enter Customer Mobile" id="" required />
            <div className="invalid-feedback text-right position-absolute ">Invalid mobile </div>
            <div className="valid-feedback position-absolute text-right ">Looks Good </div>
          </label>
        </div>
        <div className="col-12">
          <p>Payment Mode</p>
          <div className=" row">
            <div className="col">
              <label htmlFor="">
                <input className="m-2" type="radio" onChange={(e) => setpayment(e.target.value)} name="payment" id="" value="cash" checked={paymentMode === "cash"} />
                Cash</label>

            </div>
            <div className="col">

              <label htmlFor="">
                <input className="m-2" type="radio" onChange={(e) => setpayment(e.target.value)} name="payment" id="" value="card" checked={paymentMode === "card"} />
                Card</label>
            </div>
            <div className="col">

              <label htmlFor="">
                <input className="m-2" type="radio" onChange={(e) => setpayment(e.target.value)} name="payment" id="" value="upi" checked={paymentMode === "upi"} />
                Upi</label>
            </div>
          </div>
        </div>
      </form>
    </div>);
  }
}

let mapState = (state) => {
  const { username, userMobile, paymentMode, isValid } = state.reducer
  return { username, userMobile, paymentMode, isValid }
}

let mapProps = (dispatch) => {
  return bindActionCreators({ setUsername, setUserMobile, setpaymentMode }, dispatch)
}
export default connect(mapState, mapProps)(UserDetails);
