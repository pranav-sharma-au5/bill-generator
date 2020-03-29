import React, { Component } from 'react';

class MenuItem extends Component {
  state = { quantity: 0 }

  increase = () => {
    this.setState(prevState => ({ quantity: ++prevState.quantity }))
  }
  decrease = () => {
    if (this.state.quantity > 0)
      this.setState(prevState => ({ quantity: --prevState.quantity }))
  }
  render() {
    const { index, item, addToCart } = this.props
    const { quantity } = this.state

    return (<tr>
      <td>{index + 1}</td>
      <td className="text-capitalize" >{item.itemName}</td>
      <td>{item.price}</td>
      <td className="text-xl-center">
        <i onClick={() => this.decrease()} className="fa mx-xl-2 mx-1 fa-arrow-left"></i>
        {quantity}
        <i onClick={() => this.increase()} className="fa mx-xl-2 mx-1 fa-arrow-right"></i>
      </td>
      <td className="text-center"><i onClick={() => quantity ? addToCart(item, quantity) : 1} className="fa fa-plus-circle fa-2x"></i></td>
    </tr >);
  }
}

export default MenuItem;