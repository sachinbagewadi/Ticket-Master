import React from 'react'


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username:this.state.username ,
            email: this.state.email ,
            password: this.state.password
        }
        console.log(formData)
    }

    render() {
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input type="text" id = "username" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>

                    <label htmlFor="email">email</label>
                    <input type="text" id = "email" name="email" value={this.state.email} onChange={this.handleChange} /> <br/>

                    <label htmlFor="password">password</label>
                    <input type="password" id = "password" name="password" value={this.state.password} onChange={this.handleChange} /> <br/>

                    <input type="submit" value="register" />

                </form>
            </div>
        )
    }
}

export default Register