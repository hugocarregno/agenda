import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {
  state = {
    name: '',
    lastname: '',
    email: '',
    phone: ''
  }
  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit = async e => {
    e.preventDefault();
    const newContact = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        phone: this.state.phone
    };
    await axios.post('/api/contact', newContact)
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h4>New Contact</h4>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" name="lastname" placeholder="Lastname" onChange={this.onChange} value={this.state.lastname} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="mail" name="email" placeholder="E-mail" onChange={this.onChange} value={this.state.email} required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="tel" name="phone" placeholder="Phone" onChange={this.onChange} value={this.state.email} required />
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
