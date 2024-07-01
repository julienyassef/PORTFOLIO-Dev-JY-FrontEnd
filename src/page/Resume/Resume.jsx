//SCSS
import './Resume.scss'

//React
import { useTranslation } from 'react-i18next';

const Resume = ()=> {
  const { t } = useTranslation();


  return (
    <div className='bodyresume'>
      <div className='bodyresume__sideSpacing'>
        <h1 className='bodyresume__sideSpacing__title'>{t('resume.resume')}</h1>
        <div className='bodyresume__sideSpacing__containerResume'>
          <img className='bodyresume__sideSpacing__containerResume__displayResume' src='./assets/CVjulienyassef.png' alt="cv de julien yassef " />
          {/* Bouton pour télécharger le CV */}
          <a href='./assets/CVjulienyassef.pdf' download="CV-Dev-FrontEnd-JulienYASSEF.pdf">
            <button className='bodyresume__sideSpacing__containerResume__downloadButton'>
              {t('resume.download')}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;