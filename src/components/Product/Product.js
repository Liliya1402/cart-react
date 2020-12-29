import { React, Component } from 'react';
import { Card, Button, Image } from "semantic-ui-react";

class Product extends Component{
    
   
  state = {
    qty: 1,
    selected: false
}

addToCartClicked = (id, q,name,price,description) => {
    this.setState({selected: true});
    this.props.addToCartClicked(id, q,name,price,description);
}

render() {
  
         return (
          <div className="col-md-4">
          <div className="thumbnail text-center">
          <div style={{ margin: '10px' }}>
          <Card>
              <Card.Content>
                  <Image
                      floated='right'
                      size='medium'
                      src={this.props.photoPath}
                  />
                  <Card.Header>{this.props.name}</Card.Header>
                
                  <Card.Meta>CAD {this.props.price}</Card.Meta>
                  <Card.Description>{this.props.description}</Card.Description>
                  <input type="number" min="1" max="20" value={this.state.qty}
                      onKeyDown={(e) => { e.preventDefault();}}
                      onChange={(event) => { this.setState({ qty: event.target.value }) }}
                      disabled={this.state.selected}
                  />
                  {this.state.selected ? <span>  Item in Cart</span> : null}
              </Card.Content>
              <Card.Content extra>
                  <div className='ui two buttons'>
                      <Button  className="btn btn-md btn-info" onClick={() => { this.addToCartClicked(this.props.id, this.state.qty, this.props.name, this.props.price,this.props.description) }}
                          disabled={this.state.selected}> Add to Cart </Button>
                      
                  </div>
              </Card.Content>
          </Card>
          
      </div>
            </div>
            </div>
           
        
        );
    }
}                          
       
export default Product;
 

