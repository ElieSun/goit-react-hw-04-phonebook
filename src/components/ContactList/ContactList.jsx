import { Component } from 'react'
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled'

export class ContactList extends Component {
    render() {
        return (
            <>
            <List>
            {this.props.contacts.map((contact) => {
                const name = contact.name.toLowerCase();
                const number = contact.number;
                const filter = this.props.filter.toLowerCase();
                if (name.includes(filter) || number.includes(filter))
                    return <ContactListItem 
                            key={contact.id} 
                            contact={contact}
                            deleteContact={() => this.props.deleteContact(contact.id)}
                        />
                else 
                    return null;
            })}
            </List>
            </>
        );
    }
}

ContactList.propTypes = {
    contacts: 
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })).isRequired,
    filter: PropTypes.string,
    deleteContact: PropTypes.func.isRequired,
};
