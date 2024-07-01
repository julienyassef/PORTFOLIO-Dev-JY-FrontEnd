//SCSS
import './Home.scss'

//React
import { useTranslation } from 'react-i18next';

//Icon
import IconGithub from '../../components/Icon/IconNav/IconGitHub.jsx'
import IconEmail from '../../components/Icon/IconNav/IconEmail.jsx'
import IconLinkedin from '../../components/Icon/IconNav/IconLinkedin.jsx'

//Components
import NetworkLink from '../../components/NetworkLink/NetworkLink';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage.jsx';
import ButtonScrollToTop from '../../components/ButtonScrollToTop/ButtonScrollToTop.jsx';
import ScrollHint from '../../components/ScrollHint/ScrollHint.jsx';

//Page
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import Resume from '../Resume/Resume.jsx';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='bodyHome'>
        <ButtonScrollToTop/>
        <div className='bodyHome__titles'>
          <h2 className='bodyHome__titles__name'>Julien YASSEF</h2>
          <h1 className='bodyHome__titles__job'>{t('home.job')}</h1> 
          <h2 className='bodyHome__titles__job2'>{t('home.job2')}</h2> 
          <p className='bodyHome__titles__pick-upLine'>{t('home.pickUpLine')}</p> 
        </div>
        <div className='bodyHome__containerNetworkLink'>
          <NetworkLink 
            icon={<IconLinkedin 
                  className="homeIconLinkedin"
                  width= '55px' 
                  height= '60px'
                  />} 
            color="var(--primary-color)" 
            backgroundColor="var(--background-color-4)"
            enableHoverEffect ={true}
            width= '90px'
            height= '90px' 
            tabletWidth="80px"
            tabletHeight="80px"
            mobileWidth="60px"
            mobileHeight="60px"
            href="https://www.linkedin.com/in/julien-yassef-01a21710a" 
          />
          <NetworkLink 
            icon={<IconGithub 
                  className="homeIconGithub"
                  width= '45px' 
                  height= '45px' 
                  />} 
            color="var(--primary-color)" 
            backgroundColor="var(--background-color-4)"
            enableHoverEffect ={true}
            width= '90px'
            height= '90px' 
            tabletWidth="80px"
            tabletHeight="80px"
            mobileWidth="60px"
            mobileHeight="60px"
            href="https://github.com/julienyassef" 
          />
          <NetworkLink 
            icon={<IconEmail
                  className="homeIconEmail"
                  width= '50px'
                  height= '50px'
                  />} 
            color="var(--primary-color)"
            backgroundColor="var(--background-color-4)"
            enableHoverEffect ={true}
            width= '90px'
            height= '90px' 
            tabletWidth="80px"
            tabletHeight="80px"
            mobileWidth="60px"
            mobileHeight="60px"
            href="#contact" 
          />
        </div>
        <div className="parallax-container" style={{ position: 'relative' }}>
          <ParallaxImage
            imageUrl='./assets/picture/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg'
            width="100%"
            initialHeight="197px"
            tabletHeight="150px"
            mobileHeight="100px"
            speedFactor={0.1}
          />
          <ScrollHint />
        </div>
      </div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="resume"> <Resume /> </div>
      <div id="contact"><Contact /></div>
    </>
  )
}
export default Home