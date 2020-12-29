import { React, Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import { Menu } from 'semantic-ui-react'
import Products from './../Products/Products';

import About from './../../components/About';
import Register from './../../components/Registration/Register';
import CreateProduct from './../Products/createProduct';


class Shop extends Component {
  
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
   
        return (
           
                <div className="body">
             <h1 className="navbar-logo">Dress Store</h1>
               
                <Menu pointing colored className="">
                    <Menu.Item name='logo'>     
             <h3>Dress Store</h3></Menu.Item> 
                    <Menu.Item
                        as={Link} to='/'
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >Products</Menu.Item>
                    <Menu.Item
                        as={Link} to='/login'
                       className ='login'
                        active={this.state.activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >Sign in</Menu.Item>

                     <Menu.Item
                        as={Link} to='/register'
                        name='registration'
                        active={this.state.activeItem === 'register'}
                        onClick={this.handleItemClick}
                    >Register</Menu.Item>
                     <Menu.Item
                        as={Link} to='/About'
                        name='about'
                        active={this.state.activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >About</Menu.Item>
                      <Menu.Item
                        as={Link} to='/createProduct'
                        name='create'
                        active={this.state.activeItem === 'createProduct'}
                        onClick={this.handleItemClick}
                    >Add a new product</Menu.Item>
               
               <Menu.Item
                        as={Link} to='/Search'
                        name='search'
                        active={this.state.activeItem === 'search'}
                        onClick={this.handleItemClick}
                    >Search</Menu.Item>

                      <Menu.Item
                        as={Link} to='/Cart'
                        name='cart'
                        active={this.state.activeItem === 'cart'}
                        onClick={this.handleItemClick}
                    >Cart</Menu.Item>

                </Menu>
                 

{/* 
                {/* <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Product</a>
                                <Link to="/">Products</Link>
                            </li>
                            <li>
                                <a href="/login">Login</a>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header> */}          
               
                <Switch>
                   <Route path="/login" exact component={Login} />
                   <Route path="/register" exact component={Register} />
                    <Route path="/" exact component={Products} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/about" exact component={About} />
                    <Route path="/createProduct" exact component={CreateProduct} />
                   
                    <Route render={() => <h3>Not Found</h3>} />
    
                </Switch>    
                </div>    
            
        );
    }
}

export default Shop;
