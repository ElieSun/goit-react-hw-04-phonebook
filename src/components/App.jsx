import { Component } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Phonebook, MainTitle, SubTitle } from "./App.styled";


export class App extends Component {
  notifications = false;
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  formSubmitHandle = (contact) => {
    const notification = this.state.contacts.find(item => item.name === contact.name);
    if (notification) {
        alert(`${contact.name} is already in contacts`)
    } else {
      this.setState(({contacts}) => ({
        contacts: [...contacts, contact]
      }))
    }
  }

  filterContact = (search) => {
    this.setState(({
      filter: search
    }))
  }

  deleteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render () {
    return (
      <Phonebook>
        <MainTitle>iPhoneBook &#63743;</MainTitle>
        <ContactForm
          formSubmitHandle={this.formSubmitHandle}
        />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={this.state.filter} filterContact={this.filterContact}/>
        <ContactList 
          contacts={this.state.contacts} 
          filter={this.state.filter} 
          deleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      const contacts = JSON.parse(localContacts);
      this.setState({ contacts: contacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log('component updated');
      window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    console.log('componentDidUpdate');
  }
}
