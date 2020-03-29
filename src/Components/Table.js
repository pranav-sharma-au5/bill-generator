import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { getTables, setTableId } from "../actionCreators/actions";
import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getTables()
  }

  render() {
    const { tables, setTableId, tableId } = this.props
    return (
      <div className="container" >
        <h3 className="font-weight-lighter text-center" >Tables</h3>
        <div className="row tables-bg align-items-start">
          {tables.map(el =>
            <div onClick={() => setTableId(el.id)} key={uuid()} className={"col-lg-3 col-sm-6  my-3 "}>
              <div className={" d-flex flex-column position-relative  p-1 " + (tableId === el.id ? "selected" : "")}>
                <span className="strength " >{el.seatingStrength}</span>
                <span className="floor  ">{el.floor === 1 ? "First" : el.floor === 2 ? "Second" : "Third"} Floor </span>
                <img className="table-img" src="https://media-cdn.tripadvisor.com/media/photo-s/0f/b1/63/87/dining-table-first-floor.jpg" alt="" />
                <div className="row  d-flex flex-column align-content-center bg-text   m-0  py-2  ">
                  <span className=" text-capitalize">
                    {el.name}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className="row ">
          <div className="col">
            <Link to="/waiter" >
              <button className="btn btn-outline-light px-5 float-right " >Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


let mapState = (state) => {
  const { tables, tableId } = state.reducer
  console.log(tables)
  return { tables, tableId }
}

let mapProps = (dispatch) => {
  return bindActionCreators({ getTables, setTableId }, dispatch)
}
export default connect(mapState, mapProps)(Table);
