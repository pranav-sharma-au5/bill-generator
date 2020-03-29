
const initialState = {
  tables: [],
  tableId: '',
  waiters: [],
  waiterId: '',
  menu: [],
  cart: [],
  total: 0,
  username: '',
  userMobile: '',
  paymentMode: "cash",
  isValid: true
}


export function reducer(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "getTables":
      stateCopy.tables = action.payload
      return stateCopy
    case "getWaiters":
      stateCopy.waiters = action.payload
      return stateCopy
    case "getMenu":
      stateCopy.menu = action.payload
      return stateCopy
    case "addToCart":
      let newItem = action.payload
      stateCopy.cart = stateCopy.cart.map(el => {
        if (el.id === newItem.id) {
          el.quantity += newItem.quantity
          newItem = false
        }
        return el
      })
      if (newItem)
        stateCopy.cart.push(action.payload)
      stateCopy.total = stateCopy.cart.reduce((a, b) => a + b.quantity * b.price, 0)
      return stateCopy
    case "removeItem":
      stateCopy.cart.splice(action.payload, 1)
      stateCopy.total = stateCopy.cart.reduce((a, b) => a + b.quantity * b.price, 0)
      return stateCopy
    case "username":
      stateCopy.username = action.payload
      return stateCopy
    case "userMobile":
      stateCopy.userMobile = action.payload
      return stateCopy
    case "payment":
      stateCopy.paymentMode = action.payload
      return stateCopy
    case "setTableId":
      stateCopy.tableId = action.payload
      return stateCopy
    case "setWaiterId":
      stateCopy.waiterId = action.payload
      return stateCopy
    case "done":
      stateCopy = initialState
      return stateCopy
    case "validate":
      stateCopy.isValid = false
      return stateCopy
    default:
      return stateCopy
  }
}