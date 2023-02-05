import { Component } from "react";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, FormLine, FormLabel, FormInput, FormButton } from 'components/ContactForm/ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = evt => {
        const {name, value} = evt.currentTarget;
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }; 

    handleSubmit = evt => {
        evt.preventDefault();
        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number
        }
        this.props.formSubmitHandle(contact);

        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''});
    };

    render() {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <FormLine>
                    <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
                    <FormInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                </FormLine>
                <FormLine>
                    <FormLabel>Contact Number</FormLabel>
                    <FormInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </FormLine>
                <FormButton type="submit">
                    Add contact
                </FormButton>
            </Form>
            </>
        );
    }
}

ContactForm.propTypes = {
    formSubmitHandle: PropTypes.func.isRequired
};
