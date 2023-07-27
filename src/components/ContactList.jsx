import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import ContactRow from './ContactRow.jsx'

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];


const ContactList = () => {

  const [contacts, setContacts] = useState(dummyContacts);

  useEffect( () => {
    const fetchContacts = async () => {
      try {
        const response = await fetch (API_URL);
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        console.error(`Oh no! Silly error in fetchContacts: `, err)
      }
    }

    fetchContacts();

  }, []);

  console.log("contacts: ", contacts)
  return (
    <>
      <table>
        <thead>
          <tr>
              <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
          </tr>
          {/* {
            contacts.map((contact) => {
              console.log(contact);
              return (
                <>
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
                </>
              )
            })
          } */}
          {contacts.map((contact) => {
            return (
                <ContactRow key={contact.id} contact={contact} />
            );
          })}
        </tbody>
      </table>

    </>
  )
}

export default ContactList