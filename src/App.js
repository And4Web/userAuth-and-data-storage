import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import { auth } from "./firebase/config";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   currentUser: null
    // };
  }
  // unsubscribeFromAuth = null;
  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     this.setState({
  //       currentUser: user
  //     });
  //   });
  // }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    // console.log(this.state.currentUser);
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
