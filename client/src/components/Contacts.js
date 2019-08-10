import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
  constructor(props){
    super(props);

    this.state = {
      contacts: [{
        id: 1,
        name: 'hp',
        lastname: 'speedy',
        email: 'm@hotmail.com',
        phone: '12332132'
      },
      {
        id: 2,
        name: 'samsung',
        lastname: 'toshiba',
        email: 'a@hotmail.com',
        phone: '44432132'
      }]
    };
  }
  render(){
    const { contacts } = this.state;
    return(
      <div className="container">
        <h1>Mis Contactos</h1><Link className="btn btn-primary" to="/newcontact">New</Link>
        <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return <tr key={`${index} tr`}>
                    <td key={`${index} id`}>{contact.id}</td>
                    <td key={`${index} name`}>{contact.name}</td>
                    <td key={`${index} lastname`}>{contact.lastname}</td>
                    <td key={`${index} email`}>{contact.email}</td>
                    <td key={`${index} phone`}>{contact.phone}</td>
                  </tr>
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}
