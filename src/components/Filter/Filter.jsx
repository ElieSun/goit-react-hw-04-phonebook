import { Component } from "react";
import PropTypes from 'prop-types';
import { Input } from 'components/Filter/Filter.styled'

export class Filter extends Component {
    
    handleChange = evt => {
        const {value} = evt.currentTarget;
        this.props.filterContact(value);
    };

    render() {
        return(
    <>
    <Input
    type="text"
    name="filter"
    value={this.props.filter}
    onChange={this.handleChange}
    placeholder='Search...'
    />
    </>
        )
    }
}

Filter.propTypes = {
    filter: PropTypes.string,
    filterContact: PropTypes.func.isRequired,
};
