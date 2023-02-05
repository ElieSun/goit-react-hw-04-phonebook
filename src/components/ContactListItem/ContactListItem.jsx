import { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Button } from 'components/ContactListItem/ContactListItem.styled'

export class ContactListItem extends Component {
    render() {
        return (
            <>
                <Item>
                    <span>{this.props.contact.name}: {this.props.contact.number} </span>
                    <Button  type="button" onClick={this.props.deleteContact}>Delete</Button>
                </Item>
            </>
        );
    }

}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired
};
