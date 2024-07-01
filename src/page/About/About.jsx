//SCSS
import './About.scss'

//React
import { useTranslation } from 'react-i18next';

//Icon, Deco
import Quote from '../../components/Quotes/Quote.jsx'

//Components
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage.jsx';

function About() {
  const { t } = useTranslation();
  
  return (
    <div className='bodyabout'>
      <div className='bodyabout__sideSpacing'>
        <h1 className='bodyabout__sideSpacing__title'>{t('about.about')}</h1>
        <div className='bodyabout__sideSpacing__container'>
          <img className='bodyabout__sideSpacing__container__img' src='./assets/picture/photoJulien.jpg' alt="photo de profil de Julien YASSEF" />
          <div className='bodyabout__sideSpacing__container__desc'>
            <div className='bodyabout__sideSpacing__container__desc__text'>
                <h2>
                  <Quote
                    color="var(--primary-color)" 
                    width= {16}
                    height= {16} 
                  />
                  {t('about.presentationTitle')}</h2>
                  <p>
                    {t('about.presentationPartie1')}
                  </p>
                  <p>
                    {t('about.presentationPartie2')}
                  </p>
                  <p>
                    {t('about.presentationPartie3')}
                  </p>
                  <p>
                    {t('about.presentationPartie4')}
                  </p>
                  <p>
                    {t('about.presentationPartie6')}
                  </p>
                  <p>
                    {t('about.presentationPartie7')}
                  </p>
                  <p>
                    {t('about.presentationPartie8')}
                    <Quote
                      color="var(--primary-color)" 
                      width= {16}
                      height= {16} 
                    />
                  </p>

            </div>
            <a className='bodyabout__sideSpacing__container__desc__linkProjects' href="#projects">
            {t('about.linkProjects')}
            </a>
          </div>
        </div>
      </div>
      <ParallaxImage
        imageUrl='./assets/picture/altumcode-PNbDkQ2DDgM-unsplash.jpg'
        width="100%"
        initialHeight="197px"
        tabletHeight="150px"
        mobileHeight="100px"
        speedFactor={0.1}
      />
      
    </div>
  )
}
export default About