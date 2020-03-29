import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { getWaiters, setWaiterId } from "../actionCreators/actions";
import { v4 as uuid } from "uuid";
import { Link, Redirect } from 'react-router-dom';

class Waiter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getWaiters()
  }

  render() {
    const { waiters, setWaiterId, tableId, waiterId } = this.props
    return (
      <div className="container" >
        <h3 className="font-weight-lighter text-center" >Waiters</h3>
        {!tableId && <Redirect to="/" />}

        <div className="row">
          {waiters.map(el =>
            <div onClick={() => setWaiterId(el.id)} key={uuid()} className="col-lg-3 col-sm-6 my-3">


              <div className={" d-flex position-relative flex-column rounded p-1 " + (waiterId === el.id ? "selected" : "")}>
                <span className="rating-waiter " ><i className="fa text-warning fa-star"></i> {el.ratings}</span>
                <img height="220vh" src="https://i.ibb.co/ThRRSPs/waiter.png" alt="" />
                <div className="row bg-text  d-flex flex-column align-content-start   m-0  py-2  ">
                  <span className="ml-3 waiter-name text-capitalize">
                    {el.name}
                  </span>
                </div>
              </div>
            </div>
          )}
          <img src="" alt="" />

        </div>
        <div className="row ">
          <div className="col">
            <Link to="/bill">
              <button className="btn btn-outline-light px-5 float-right " >Next</button>
            </Link>
            <Link to="/">
              <button className="btn btn-outline-light px-5 float-left " >Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


let mapState = (state) => {
  const { waiters, waiterId, tableId } = state.reducer
  return { waiters, tableId, waiterId }
}

let mapProps = (dispatch) => {
  return bindActionCreators({ getWaiters, setWaiterId }, dispatch)
}
export default connect(mapState, mapProps)(Waiter);
