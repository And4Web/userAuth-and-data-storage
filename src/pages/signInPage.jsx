import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signInWithPopUp } from "../firebase/config";

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
          <button>Sign in with Email</button>
        </form>
        <button onClick={signInWithPopUp}>Sign in with Google</button>
        <button>Sign in with Facebook</button>
      </>
    );
  }
}
export default SignInPage;
