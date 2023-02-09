
import PropTypes from 'prop-types';
import { Item, Button } from 'components/ContactListItem/ContactListItem.styled'

export default function ContactListItem ({ contact, deleteContact }) {

        return (
            <>
                <Item>
                    <span>{contact.name}: {contact.number} </span>
                    <Button  type="button" onClick={deleteContact}>Delete</Button>
                </Item>
            </>
        );
    }


ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired
};
