import React, { Component } from "react";
import logo1 from "./fbLogo.png";
import logo2 from "./googleLogo.png";
import logo from "./bobbleLogo.jpg";
import "./SignUpPage.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      fname: "First Name",
      lname: "Last Name",
      email: "Email Address",
      pass: "Password",
    };
  }

  onChangeFname(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  onChangeLname(e) {
    this.setState({
      lname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      pass: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div class="div1">
          <img src={logo} class="img1" />
        </div>
        {/*this is the sign up block */}
        <div class="main-block">
          <h5>SIGN UP</h5>
          <br />
          <h1>Create your account</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <button class="button1">
            <img src={logo1} class="img" />
            Sign up with Google
          </button>

          <button class="button1">
            <img src={logo2} class="img" />
            Sign up with Facebook
          </button>
          <hr />
          <p class="or">or</p>
          <form>
            <input
              type="text"
              class="input-box"
              value={this.state.fname}
              onChange={this.onChangeFname}
            />
            <br />
            <input
              type="text"
              class="input-box"
              value={this.state.lname}
              onChange={this.onChangeLname}
            />
            <br />
            <input
              type="email"
              class="input-box"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <br />
            <input
              type="password"
              class="input-box"
              value={this.state.pass}
              onChange={this.onChangePassword}
            />
            <br />
            <p>
              By clicking Sign Up, you agree to our{" "}
              <span class="samll-text1">Terms of Use</span> and our{" "}
              <span class="samll-text1">Privacy Policy</span>
            </p>

            <button class="button2">SIGN UP</button>
          </form>
        </div>
      </>
    );
  }
}
