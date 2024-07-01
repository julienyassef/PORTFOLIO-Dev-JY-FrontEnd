import PropTypes from 'prop-types';

const IconValid =({ color }) => {
  return (
    <svg className="iconValid" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4_1108)">
      <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM10.7181 3.51288L12.2763 5.0711L7.40936 9.93897L5.86029 11.4871L4.30206 9.9289L2.72369 8.3496L4.27185 6.80144L5.85023 8.38073L10.7181 3.51288Z" fill={color}/>
      </g>
      <defs>
      <clipPath id="clip0_4_1108">
      <rect width="15" height="15" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

IconValid.propTypes = {
  color: PropTypes.string.isRequired
};

export default IconValid


