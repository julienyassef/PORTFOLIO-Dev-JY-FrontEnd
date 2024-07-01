//scss
import './SiteMap.scss'

//React
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

//component
import DynamicLink from '../../components/DynamicLink/DynamicLink'

const SiteMap = () =>{
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const links = [
    { to: "/", titleKey: 'siteMap.home', isDynamic: false },
    { toSection: 'about', titleKey: 'about.about', isDynamic: true },
    { toSection: 'skills', titleKey: 'skills.skills', isDynamic: true },
    { toSection: 'projects', titleKey: 'projects.projects', isDynamic: true },
    { toSection: 'resume', titleKey: 'resume.resume', isDynamic: true },
    { toSection: 'contact', titleKey: 'contact.contact', isDynamic: true },
    { to: "/legal-notice", titleKey: 'siteMap.legalmentions', isDynamic: false },
    { to: "/site-map", titleKey: 'siteMap.sitemap', isDynamic: false },
    { to: "/privacy-policy", titleKey: 'siteMap.privacypolicy', isDynamic: false },
];

return (
    <div className='siteMapBoddy'>
        <h1 className='siteMapBoddy__title'>{t('siteMap.title')}</h1>
        <div className='siteMapBoddy__containerLink'>
            {links.map((link, index) => 
                link.isDynamic ? (
                    <DynamicLink
                        key={index}
                        className="siteMapBoddy__containerLink__link"
                        toSection={link.toSection}
                        title={t(link.titleKey)}
                    />
                ) : (
                    <Link 
                        key={index}
                        className="siteMapBoddy__containerLink__link"
                        to={link.to}
                    >{t(link.titleKey)}</Link>
                )
            )}
        </div>
    </div>
);
}

export default SiteMap;