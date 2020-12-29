import { React, Component } from 'react';
import axios from 'axios';

class CreateProduct extends Component {

    state = {
        name: '',
        price: 0,
        photoPath: '',
        url: "https://localhost:5001/Product/"
    } 

    postDataHandler = () => {

        const data = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description, 
            photoPath: this.state.photoPath
        }

        axios.post(this.state.url, data)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                <h1>Add a new product</h1>

                Name: <br />
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.setState({name: event.target.value})}
                    ></input>
                    <br />
                Price: <br />
                <input type="text"
                    value={this.state.price}
                    onChange={(event) => this.setState({price: event.target.value})}
                    ></input>
                    <br />         
                    Description: <br />
                <input type="text"
                    value={this.state.description}
                    onChange={(event) => this.setState({description: event.target.value})}
                    ></input>
                    <br />           
                Photo: <br />
                <input type="text"
                    value={this.state.photoPath}
                    onChange={(event) => this.setState({photoPath: event.target.value})}
                    ></input>
                    <br />
                    <br/>
                <button onClick={this.postDataHandler}>Add Product</button>
                <br />                    <br />                    <br />
            </div>
        );
    }
}

export default CreateProduct;