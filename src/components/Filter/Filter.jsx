import PropTypes from 'prop-types';
import { Input } from 'components/Filter/Filter.styled'


export default function Filter({ filter, filterContact }){
    
    const handleChange = evt => {
        const {value} = evt.currentTarget;
        filterContact(value);
    };

    return(
        <>
        <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder='Search...'
        />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    filterContact: PropTypes.func.isRequired,
};
