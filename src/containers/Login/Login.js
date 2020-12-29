import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../../components/Auth/Auth'
import { connect } from 'react-redux'
import { login } from '../../store/action/auth';

class Login extends Component {

    submit = data => 
        this.props.login(data)
        .then(() => this.props.history.push('/products'))
        .catch(err => {
            console.log("err", err)
        });

    render() {
        return (
            <div className="loginForm col-md-6 center" > 
                 <h1 className="h1" >Login page</h1> 
                <Auth submit={this.submit} />
            
            </div>
        );
    }
}

Login.propsTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);

    