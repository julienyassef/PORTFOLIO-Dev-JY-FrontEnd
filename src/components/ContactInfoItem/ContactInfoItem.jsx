//Scss
import'./ContactInfoItem.scss'

//React import 
import PropTypes from 'prop-types';


/**
 * ContactInfoItem est un composant qui affiche un élément d'information de contact,
 * tel qu'un numéro de téléphone, une adresse e-mail, etc., avec une icône correspondante.
 *
 * @param {JSX.Element} icon - L'élément JSX représentant l'icône.
 * @param {string} title - Le titre de l'élément d'information (par exemple, 'Téléphone', 'Email').
 * @param {string | JSX.Element} data - Les données de contact spécifiques (par exemple, un numéro de téléphone, une adresse e-mail).
 */

const ContactInfoItem = ({ icon, title, data }) => {
    return (
        <div className="contact-info-item">
            {/* Icône associée à l'information de contact */}
            <div className="contact-info-item__icon">{icon}</div>
            
            {/* Conteneur pour le titre et les données */}
            <div className="contact-info-item__content">
                {/* Titre de l'information de contact */}
                <div className="contact-info-item__content__title">{title}</div>
                {/* Données de contact affichées */}
                <div className="contact-info-item__content__data">{data}</div>
            </div>
        </div>
    );
};


ContactInfoItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
};

export default ContactInfoItem;
