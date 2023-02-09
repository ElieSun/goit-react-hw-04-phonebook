
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Phonebook, MainTitle, SubTitle } from "./App.styled";
import { useState, useEffect } from 'react'; 

export function App () {
  const startContacts = JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  const [contacts, setContacts] = useState(startContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandle = contact => {
    const notification = contacts.find(item => item.name === contact.name);
    
    if (notification) {
        alert(`${contact.name} is already in contacts`)
    } else {
      setContacts(prevState => [...prevState, contact]) // check this part
    }
  }

  const filterContact = search => {
    setFilter(search) // check this part
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)) // check this part
  }

  useEffect(() => {
    // const localContacts = window.localStorage.getItem('contacts');
    // if (localContacts) {
    //   const contacts = JSON.parse(localContacts);
    //   setContacts({ contacts: contacts })
    // } else {
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
    // }
  // }
  }, [contacts]);

    return (
      <Phonebook>
        <MainTitle>iPhoneBook &#63743;</MainTitle>
        <ContactForm formSubmitHandle={formSubmitHandle} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} filterContact={filterContact}/>
        <ContactList 
          contacts={contacts} 
          filter={filter} 
          deleteContact={deleteContact}
        />
      </Phonebook>
    );
    }
  




