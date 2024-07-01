//Scss
import './Contact.scss'

//Icon
import IconGithub from '../../components/Icon/IconNav/IconGitHub.jsx'
import IconLinkedin from '../../components/Icon/IconNav/IconLinkedin.jsx'
import ArobaseIcon from '../../components/Icon/IconNav/IconArobase.jsx';
import PhoneIcon from '../../components/Icon/IconNav/IconPhone.jsx'

//Components
import NetworkLink from '../../components/NetworkLink/NetworkLink';
import ContactInfoItem from '../../components/ContactInfoItem/ContactInfoItem';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';


//React
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='bodycontact'>
      <div className='bodycontact__wrapper'>
        <div className='bodycontact__wrapper__sideSpacing'>
          <div className='bodycontact__wrapper__sideSpacing__containers'>
            <div className='bodycontact__wrapper__sideSpacing__containers__containerContact' >
             <h1 className='bodycontact__wrapper__sideSpacing__containers__containerContact__h1'>{t('contact.contact')}</h1>
             <div className='bodycontact__wrapper__sideSpacing__containers__containerContact__info'>
              <img className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__picture' src='./assets/picture/photoJulien.jpg' alt="photo de profil de Julien YASSEF" />
              <div className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__content'>
                <p className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__content__name'>Julien YASSEF</p>
                <div className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__content__job'>
                  <p className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__content__job1'>{t('contact.job')}</p>
                  <p className='bodycontact__wrapper__sideSpacing__containers__containerContact__info__content__job2'>{t('contact.job2')}</p>
                </div>
              </div>
             </div>
             <div className='bodycontact__wrapper__sideSpacing__containers__containerContact__contactItemInfo'>
                <ContactInfoItem 
                    icon={<PhoneIcon 
                      className="contactIconPhone"
                      width= '35px'
                      height= '35px'
                      color="var(--primary-color)" 
                    />}
                    title={t('contact.phone')}
                    data="07 69 96 36 59"
                  />
                <ContactInfoItem 
                    icon={<ArobaseIcon
                      className="contactIconEmail"
                      width= '30px'
                      height= '30px'
                      color="var(--primary-color)" 
                      />}
                    title="Email"
                    data="contact@julienyassef.fr"
                  />

             </div>
              <h3 className='bodycontact__wrapper__sideSpacing__containers__containerContact__h3'>{t('contact.professionalnetwork')}</h3>
              <div className='bodycontact__wrapper__sideSpacing__containers__containerContact__networksLink'>
                <NetworkLink 
                  icon={<IconLinkedin 
                        className="homeIconLinkedin"
                        width= '22px' 
                        height= '22px'
                        />} 
                  backgroundColor="var(--background-color-4)"
                  enableHoverEffect ={true}
                  color="var(--primary-color)" 
                  width= '48px'
                  height= '48px' 
                  href="https://www.linkedin.com/in/julien-yassef-01a21710a" 
                />
                <NetworkLink 
                  icon={<IconGithub 
                        className="homeIconGithub"
                        width= '22px' 
                        height= '22px' 
                        />} 
                  backgroundColor="var(--background-color-4)"
                  enableHoverEffect ={true}
                  color="var(--primary-color)" 
                  width= '48px'
                  height= '48px' 
                  href="https://github.com/julienyassef" 
                />
              </div>

            </div>
            <div className='bodycontact__wrapper__sideSpacing__containers__containerSendMessage' >
              <h2 className='bodycontact__wrapper__sideSpacing__containers__containerSendMessage__h2'>{t('contact.h2')}</h2> 
              <div className='bodycontact__wrapper__sideSpacing__containers__containerSendMessage__form'>
                <ContactForm/>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
export default Contact