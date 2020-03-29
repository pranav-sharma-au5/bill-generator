import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    const { index, item, removeItem } = this.props
    return (
      < tr >
        <td>{index + 1}</td>
        <td className="text-capitalize" >{item.itemName}</td>
        <td>{item.price}</td>
        <td className="text-center">
          {item.quantity}
        </td>
        <td className="text-center"><i onClick={() => removeItem(index)} className="fa fa-minus-circle fa-2x"></i></td>
      </tr >);
  }
}

export default CartItem;