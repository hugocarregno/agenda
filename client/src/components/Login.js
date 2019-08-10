import  React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
  state = {
    username: '',
    password: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit= async e => {
    e.preventDefault();
    const newLogin = {
        username: this.state.username,
        password: this.state.password,
    };
    try{
      const response = await axios.post('/api/signin', newLogin)
      const data = await response.status
      if(data===200) window.location.href = await '/contacts';
    }catch(error){
      alert(error)
    }

  };

  render() {
    return(
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h1 className="h4">
                Account Login
              </h1>
            </div>
              <img className="rounded-circle mx-auto d-block logo m-4" src="/img/logo.png" width="150" height="150" alt="Logo" />
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} autoFocus required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" required onChange={this.onChange} value={this.state.password} />
                </div>
                <button className="btn btn-primary btn-block">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
