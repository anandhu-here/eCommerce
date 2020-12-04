import React, { Component } from 'react'
import { login, register } from '../../actions/auth'
import store  from '../../store'

export class Register extends Component {
    state = {
        username:"",
        password:"",
        email:""
    }

    _handleChange = e =>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    _handleSubmit = e =>{
        e.preventDefault()
        const user = this.state;
        store.dispatch(register(user))
    }

    render() {
        return (
                <div className="auth">
                    <div className="logo">
                        <img alt="dcd"></img>
                    </div>
                    <form className="auth_form" onSubmit={this._handleSubmit.bind(this)}>
                        <input
                            className="auth_form_input" 
                            type="text" 
                            placeholder="username"
                            name="username"
                            value={this.state.username}
                            onChange={this._handleChange.bind(this)} 
                        />
                        <input
                            className="auth_form_input" 
                            type="email" 
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                            onChange={this._handleChange.bind(this)} 
                        />
                        <input 
                            className="auth_form_input" 
                            type="password" 
                            placeholder="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this._handleChange.bind(this)}
                        />
                        <input 
                            className="auth_form_submit" 
                            type="submit" 
                            
                            />

                    </form>
                </div>
            
        )
    }
}

export default Register
