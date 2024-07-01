import PropTypes from 'prop-types';


const Quote = ({ color, width, height }) => (

<svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21.25H11.25L13.75 16.25V8.75H6.25V16.25H10L7.5 21.25ZM17.5 21.25H21.25L23.75 16.25V8.75H16.25V16.25H20L17.5 21.25Z" fill={color}/>
</svg>

)

Quote.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

export default Quote
