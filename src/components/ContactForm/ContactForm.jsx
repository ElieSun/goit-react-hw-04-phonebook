import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, FormLine, FormLabel, FormInput, FormButton } from 'components/ContactForm/ContactForm.styled'

export default function ContactForm ({ formSubmitHandle }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    let nameInputId = shortid.generate();
    let numberInputId = shortid.generate();

    const handleChange = evt => {
        const {name, value} = evt.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break ;
            case 'number':
                setNumber(value)
                break ;
            default:
                break ;
        }
    }; 

    // вопрос как сюда попадут name and number
    const handleSubmit = evt => {
        evt.preventDefault();
        const contact = {
            id: shortid.generate(),
            name: name,
            number: number
        }
        formSubmitHandle(contact);

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <>
            <Form onSubmit={handleSubmit}>
                <FormLine>
                    <FormLabel htmlFor={nameInputId}>Name</FormLabel>
                    <FormInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                        id={nameInputId}
                    />
                </FormLine>
                <FormLine>
                    <FormLabel htmlFor={numberInputId}>Contact Number</FormLabel>
                    <FormInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                        id={numberInputId}
                    />
                </FormLine>
                <FormButton type="submit">
                    Add contact
                </FormButton>
            </Form>
            </>
        );
    }

ContactForm.propTypes = {
    formSubmitHandle: PropTypes.func.isRequired
};
