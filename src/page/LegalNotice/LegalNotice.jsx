//Scss
import './LegalNotice.scss'

//React
import { useEffect } from 'react';

//i18n
import { useTranslation } from 'react-i18next';

function LegalNotice() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-info">
      <h1 className="legal-info__title" >{t('legal.title')}</h1>

      <section className="legal-info__section">
        <p>{t('legal.lawText')}</p>
      </section>

      <section className="legal-info__section legal-info__owner">
        <h2 className="legal-info__section__titleSection">1.{t('legal.titlelegalinformation')}</h2>
        <p>{t('legal.ownerInfo')}</p>
        <p>{t('legal.ownerAddress')}</p>
        <p>{t('legal.contactEmail')}</p>
        <br />
        <p>{t('legal.webmasterInfo')}</p>
        <p>{t('legal.webmasterContact')}</p>
        <br />
        <p>{t('legal.hostingProvider')}</p>
        <p>{t('legal.hostingDetailsLine1')}</p>
        <p>{t('legal.hostingDetailsLine2')}</p>
        <p>{t('legal.hostingDetailsLine3')}</p>
        <p>{t('legal.hostingDetailsLine4')}</p>
        <p>{t('legal.hostingDetailsLine5')}</p>
        <p>{t('legal.hostingDetailsLine6')}</p>
      </section>

      <section className="legal-info__section legal-info__accessibility">
        <h2 className="legal-info__section__titleSection">2.{t('legal.titlePresentation')}</h2>
        <p>{t('legal.presentationLine1')}</p>
        <p>{t('legal.presentationLine2')}</p>
      </section>

      <section className="legal-info__section legal-info__intellectual-property">
        <h2 className="legal-info__section__titleSection">3.{t('legal.titleAccessibility')}</h2>
        <p>{t('legal.accessibilityGeneral')}</p>
      </section>

      <section className="legal-info__section legal-info__intellectual-property">
        <h2 className="legal-info__section__titleSection">5.{t('legal.titleIntellectualPropertyRights')}</h2>
        <p>{t('legal.intellectualPropertyRightsLine1')}</p>
        <p>{t('legal.intellectualPropertyRightsLine2')}</p>
      </section>

      <section className="legal-info__section legal-info__hyperlinks-cookies">
        <h2 className="legal-info__section__titleSection">6.{t('legal.titleHypertextLinks')}</h2>
        <p>{t('legal.hyperlinksLine1')}</p>
        <p>{t('legal.hyperlinksLine2')}</p>
        <p>{t('legal.hyperlinksLine')}</p>
      </section>

      <section className="legal-info__section legal-info__data-protection">
        <h2 className="legal-info__section__titleSection">7.{t('legal.titleProtectionofProperty')}</h2>
        <p>{t('legal.personalDataUsageLine1')}</p>
        <p>{t('legal.personalDataUsageLine2')}</p>
        <p>{t('legal.personalDataUsageLine3')}</p>
        <p>{t('legal.personalDataUsageLine4')}</p>
        <p>{t('legal.personalDataUsageLine5')}</p>
      </section>
    </div>
  );
}
export default LegalNotice