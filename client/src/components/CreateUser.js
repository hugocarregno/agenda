import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  state = {
    username: '',
    password: '',
    password2: '',
    name: '',
    lastname: '',
    email: ''
  }
  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(e.target.value);
  }
  onSubmit = async e => {
    e.preventDefault();
    const newUser = {
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2,
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email
    };
    await axios.post('/api/signup', newUser)
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h4>Sign up</h4>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="password" name="password2" placeholder="Confirm password" onChange={this.onChange} value={this.state.password2} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" name="lastname" placeholder="Lastname" onChange={this.onChange} value={this.state.lastname} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="mail" name="email" placeholder="E-mail" onChange={this.onChange} value={this.state.email} required />
                  </div>
                  <button type="submit" className="btn btn-primary container-fluid">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
