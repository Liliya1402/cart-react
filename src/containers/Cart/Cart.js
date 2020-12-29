import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

    state = {
        cartItems: [],
        products: [],
        url: "https://localhost:5001/Product/",
        totalPrice: 0
    };

    componentDidMount = () => {

        const query = new URLSearchParams(this.props.location.search);
        const items = [];
        const arr = [];
        for(let param of query.entries()) {
            items.push({ id: param[0], qty: param[1] });
            let itemArr =  param[1].split("|");
            arr.push({ id: param[0], name: itemArr[1], price: itemArr[2], qty: itemArr[0] })
        }

        this.setState({ products: arr } );
        this.setState({ cartItems: items } );
        this.props.onStoreCartItems(items);
       
    };

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.push({
        
             pathname: '/',
        })
    }
  /*   handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    handleQuantityChange = this.handleQuantityChange.bind(this);
  
  handleRemoveFromCart=(e)=> {
    this.props.removeFromCart(this.props.item, this.props.indexInCart);
  }
  handleQuantityChange=(e)=> {
    this.props.item.quantityInCart = e.target.value;
    // Update total value
    this.forceUpdate();
    this.props.updateAmountToPay(this.props.item);
  }
   */

    render() {
        const products = this.state.products.map(pro => {
         
            return <li key={pro.id}
                onClick={ () => this.props.onDeleteCartItem(pro.id) }
        >
            {pro.name}<br/> : {pro.qty}<br/> -{pro.price} Total: <br/>{pro.qty*pro.price}</li>  
        });  
       
        return (
                   
            <div>
            <h2>Cart</h2>

            <ul className="cartlist">
             {products}

            </ul>
            <button onClick={this.cancelHandler}>Cancel</button>
            <button onClick={this.continueHandler}>Checkout</button>
        </div> 
    );
}

}



const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}
        
    


const mapDispatchToProps = dispatch => {
    return {
        onStoreCartItems: (items) => dispatch({ type: 'STORE_CART_ITEMS', cartItems: items }),
        onDeleteCartItem: (id) => dispatch( {type: 'DELETE_CART_ITEM', idForDelete: id } )
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Cart);
