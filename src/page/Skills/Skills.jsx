//SCSS
import './Skills.scss'

//React
import  { useTranslation } from 'react-i18next';

//Img
import IconValid from '../../components/Icon/IconNav/IconValid.jsx'

//Components
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage.jsx';
import DisplayCardsTools from '../../components/DisplayCardsTools/DisplayCardsTools.jsx';



function Skills() {
  const { t } = useTranslation();

  const skillsList = t('skills.listSkills', { returnObjects: true });

  return (
     <div className='bodySkills'>
      <div className='bodySkills__sideSpacing'> 
        <h1 className='bodySkills__sideSpacing__h1'>{t('skills.skills')}</h1>
        <h2 className='bodySkills__sideSpacing__h2'>{t('skills.titleTools')}</h2>
        <div className='bodySkills__sideSpacing__containerTools'>
        <DisplayCardsTools/>
        </div>
        <h2 className='bodySkills__sideSpacing__h2'>{t('skills.titleSkills')}</h2>
        <div className='bodySkills__sideSpacing__containerSkills'>
          <ul>
            {skillsList.map(skill => (
              <li key={skill.key}>
                <IconValid color="var(--primary-color)" />
                {skill.text} 
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ParallaxImage
        imageUrl='./assets/picture/alvaro-reyes-qWwpHwip31M-unsplash.jpg'
        width="100%"
        initialHeight="197px"
        tabletHeight="150px"
        mobileHeight="100px"
        speedFactor={0.1}
      />
    </div>
  )
}
export default Skills