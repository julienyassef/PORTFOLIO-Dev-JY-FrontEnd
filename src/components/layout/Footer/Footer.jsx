//Scss
import './Footer.scss'

//React
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Icon, logo et img
import Logo from '../../Logo/Logo.jsx'
import IconGithub from '../../Icon/IconNav/IconGitHub.jsx';
import IconLinkedin from '../../Icon/IconNav/IconLinkedin.jsx';

//component
import NetworkLink from '../../NetworkLink/NetworkLink.jsx';
import DynamicLink from '../../DynamicLink/DynamicLink.jsx';

/**
 * Footer est un composant qui affiche le pied de page du site, incluant des liens de navigation,
 * des liens vers des réseaux sociaux et des informations légales.
 */

const Footer = () => {
  const { t } = useTranslation();

   // Fonction pour faire défiler la page jusqu'en haut
   const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='bodyFooter'>
      <div className='bodyFooter__wrapper'>
        <div className='bodyFooter__brand'>
          <Link to="/" className="bodyFooter__brand__logo" onClick={scrollToTop}>
            <Logo 
              color="white"  
              width= '50px' 
              height= '50px' 
            />
          </Link>
          <p className='bodyFooter__brand__siteName'>PORTFOLIO - Julien YASSEF - {t('footer.job')} - {t('footer.job2')}</p>
        </div>
        <div className='bodyFooter__contact'>
          <DynamicLink
          className="bodyFooter__contact__item"
          toSection='contact'
          title="contact.contact"
          />
          <NetworkLink 
            icon={<IconLinkedin  width= '20px' height= '20px' />} 
            backgroundColor=""
            color="white" 
            width= '35px'
            height= '35px'
            href="https://www.linkedin.com/in/julien-yassef-01a21710a" 
          />
          <NetworkLink 
            icon={<IconGithub  width= '17px' height= '17px' />} 
            backgroundColor=""
            color="white" 
            width= '35px'
            height= '35px'
            href="https://github.com/julienyassef" 
          />
        </div>
      </div>
      <div className='bodyFooter__dev'>
        <p className='bodyFooter__dev__item' >@ COPYRIGHT 2024 - JULIEN YASSEF - {t('footer.allRightsReserved')}</p>
      </div>
      <div className='bodyFooter__info'>
        <Link  to='/legal-notice' className='bodyFooter__info__item' href="">{t('footer.legalmentions')}</Link>
        <p className='bodyFooter__info__item' >|</p>
        <Link  to='/site-map' className='bodyFooter__info__item' href="">{t('footer.sitemap')}</Link>
      </div>
    </div>
  )
}
export default Footer