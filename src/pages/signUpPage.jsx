import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: ""
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <Link to="/">Back to Home</Link>
        <h1>Sign Up: Create Account</h1>
        <p>Register here for free</p>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Your Full Name"
            onChange={this.handleChange}
          />
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            placeholder="Your Phone Number"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Your Email"
            onChange={this.handleChange}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Your Password"
            onChange={this.handleChange}
          />
          <button>
            <Link to="/sign-in">Sign Up</Link>
          </button>
        </form>
      </>
    );
  }
}
export default SignUpPage;
