import PropTypes from 'prop-types';

const IconPhone = ({ width, height, className, color  }) => (
    <svg className={`iconEmail ${className}`}  width={width} height={height}  viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Icon Phone</title>
      <desc>Icone représentant un téléphone</desc>
      <path d="M20.4817 18.2258L19.9508 18.8617C19.9508 18.8617 18.6873 20.3722 15.2399 16.2479C11.7924 12.1237 13.0559 10.6133 13.0559 10.6133L13.3895 10.2118C14.2144 9.22635 14.2925 7.64292 13.5727 6.48622L12.1027 4.1237C11.2114 2.69187 9.49057 2.50237 8.46974 3.72363L6.63809 5.91349C6.13292 6.51991 5.79459 7.30321 5.83542 8.17354C5.94042 10.4013 6.77808 15.1923 11.4494 20.7821C16.4042 26.7087 21.0533 26.9445 22.9538 26.7312C23.5558 26.6638 24.0785 26.296 24.4996 25.7907L26.1563 23.8086C27.2763 22.4708 26.9613 20.1756 25.5286 19.2393L23.3003 17.7808C22.36 17.1674 21.2167 17.3471 20.4817 18.2258Z" fill={color}/>
    </svg>
  );

  IconPhone.propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string,
    color: PropTypes.string
  };
  
  export default IconPhone;

