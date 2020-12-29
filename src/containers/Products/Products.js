import React, { Component } from 'react';
import axios from 'axios';
import createProduct from '../../components/Product/createProduct.js';
import Product from '../../components/Product/Product'
import { Card, Button } from "semantic-ui-react";



class Products extends Component{

    state = {
        products: [],
        url: "https://localhost:5001/Product/",
        cartItems: []

}

componentDidMount() {
    
    axios.get(this.state.url)
        .then(response => {
           
            this.setState({products: response.data})
        });
}

getProductByIdHandler = (id) => {
    axios.get(this.state.url + id)
        .then(response => {
            console.log(response)
        })
}

addToCartHandler = (id, q, name,price,description) => {
  

    let ci = this.state.cartItems;
    ci.push({ id: id, quantity: +q ,name:name,price:+price,description:description});

    this.setState({ cartItems: ci });

    // console.log(this.state.cartItems);
}
orderNowHandler = () => {
    const queryParams = [];

    for(let i of this.state.cartItems) {
        if(i !== null) {
            queryParams.push(i.id + "=" + i.quantity +"|" +i.name+ "|"+ i.price +"|"+i.description);
        }
    }
    const queryStr = queryParams.join('&');

    this.props.history.push({
        pathname: '/cart',
        search: '?' + queryStr
    });
}

render() {

    const productsList = this.state.products.map(pro=> {
       
        return <Product key={pro.id} 
            id={pro.id}
            name={pro.name} 
            price={pro.price}
            photoPath={pro.photoPath}
            description={pro.description}
            getByIdClicked={() => this.getProductByIdHandler(pro.id)}

            addToCartClicked={this.addToCartHandler}
            />
    });

    return (
        <div style={{margin: '10px'}}>
         
            <Card.Group>
            {productsList}   
            <createProduct />
            </Card.Group>
            <div style={{ textAlign: "right", 
                    top: "50px", right: "40px", position: "fixed" }}>
                    <Button basic color='orange'  onClick={ this.orderNowHandler } >ORDER NOW!</Button>
                </div>
        </div>
    );
}
}


export default Products;