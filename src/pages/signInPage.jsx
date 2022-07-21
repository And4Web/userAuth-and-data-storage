import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
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
    // console.log(this.state);
  };
  render() {
    return (
      <>
        <Link to="/">Back to Home</Link>
        <h1>Sign In</h1>
        <p>Please sign in with an existing account</p>
        <form onSubmit={this.handleSubmit}>
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
            <Link to="/sign-in">Sign in with Email</Link>
          </button>
        </form>
        <button>
          <Link to="/sign-in">Sign in with Google</Link>
        </button>
        <button>
          <Link to="/sign-in">Sign in with Facebook</Link>
        </button>
      </>
    );
  }
}
export default SignInPage;
