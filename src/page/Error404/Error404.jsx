//scss
import './Error404.scss'

//React
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Error404 = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const handleGoHomeClick = (e) => {
    e.preventDefault(); 
    navigate('/'); // 
    window.scrollTo(0, 0); 
  };

 return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__title">{t('notFound.title')}</h1>
      <h2 className="notFoundPage__sousTitle">{t('notFound.sousTitle')}</h2>
      <div className="notFoundPage__container">
        <p className="notFoundPage__container__desc">{t('notFound.description')}</p>
        <a className="notFoundPage__container__link" href="/" onClick={handleGoHomeClick}>
          {t('notFound.home')}
        </a>
      </div>
    </div>
  );
}

export default Error404