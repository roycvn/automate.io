import React, { Component } from 'react';
class Login extends Component {
  constructor() {
    super();
  }
  state = {
    email: '',
    password: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.email == 'payal@automate.io' && this.state.password == '123456') {
      this.props.doLogin();
    }
  }
  updateLogin = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {
    const { isLoggedIn } = this.props.isLoggedIn;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="inner-container">
            <div className="login-screen">
              <h2>Login</h2>
              <div className="">
                <div className="outer-txt-field">
                  <i className="far fa-envelope"></i>
                  <input id="workflow-email" type="email" name="email" defaultValue={this.state.email} className="outer-txt email-txt" placeholder="Email" onChange={this.updateLogin} />
                </div>
              </div>

              <div className="">
                <div className="outer-txt-field">
                  <i className="fas fa-key"></i>
                  <input id="workflow-password" type="password" name="password" defaultValue={this.state.password} className="outer-txt password-txt" placeholder="Password" onChange={this.updateLogin} />
                </div>
              </div>

              <div className="">
                <div>
                  <button type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;