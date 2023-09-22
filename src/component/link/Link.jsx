
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
           <li className='mr-7'>
            <a href={`route.name`}>{route.name}</a>
           </li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object,
};

export default Link;