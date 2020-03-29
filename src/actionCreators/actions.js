import axios from "axios";

export function getTables() {
  const request = axios.get('https://restauraunt-api.herokuapp.com/table')

  return (dispatch) => {
    request.then(tables => {
      // console.log(tables.data,"table")
      dispatch({
        type: "getTables",
        payload: tables.data
      })
    })
  }
}
export function getWaiters() {
  const request = axios.get('https://restauraunt-api.herokuapp.com/waiter')

  return (dispatch) => {
    request.then(waiter => {
      // console.log(waiter.data,"waiter")
      dispatch({
        type: "getWaiters",
        payload: waiter.data
      })
    })
  }
}
export function getMenu() {
  const request = axios.get('https://restauraunt-api.herokuapp.com/menu')

  return (dispatch) => {
    request.then(menu => {
      // console.log(menu.data,"menu")
      dispatch({
        type: "getMenu",
        payload: menu.data
      })
    })
  }
}
export function addToCart(item, quantity) {
  item.quantity = quantity
  return {
    type: "addToCart",
    payload: item
  }
}
export function removeItem(index) {

  return {
    type: "removeItem",
    payload: index
  }

}

export function setUsername(value) {
  return {
    type: "username",
    payload: value
  }
}
export function setUserMobile(value) {
  return {
    type: "userMobile",
    payload: value
  }
}
export function setpaymentMode(value) {
  return {
    type: "payment",
    payload: value
  }
}
export function generateBill(value) {
  const {
    username,
    userMobile,
    cart: items,
    paymentMode,
    tableId,
    waiterId,
    total: totalPrice
  } = value
  // console.log({ username, userMobile, items, paymentMode, tableId, waiterId, totalPrice })
  const request = axios.post('https://restauraunt-api.herokuapp.com/bill', { username, userMobile, items, paymentMode, tableId, waiterId, totalPrice })

  request.then(done => {
    console.log(done.data, "bill")
  })
  return {
    type: "done"
  }
}
export function setTableId(id) {
  return {
    type: "setTableId",
    payload: id
  }
}
export function setWaiterId(id) {
  console.log(id)
  return {
    type: "setWaiterId",
    payload: id
  }
}

export function validate() {
  return {
    type: "validate"
  }
}