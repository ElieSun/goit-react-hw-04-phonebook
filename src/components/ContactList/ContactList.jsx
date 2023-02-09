
import ContactListItem from "components/ContactListItem/ContactListItem"
import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled'

export default function ContactList ({contacts, filter, deleteContact}) {
        return (
            <>
            <List>
            {contacts.map((contact) => {
                const name = contact.name.toLowerCase();
                const number = contact.number;
                const search = filter.toLowerCase();
                if (name.includes(search) || number.includes(search))
                    return <ContactListItem 
                            key={contact.id} 
                            contact={contact}
                            deleteContact={() => deleteContact(contact.id)}
                        />
                else 
                    return null;
            })}
            </List>
            </>
        );
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
