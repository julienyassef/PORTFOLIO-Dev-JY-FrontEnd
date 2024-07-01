//Scss
import './ContactForm.scss'

//React
import { useTranslation } from 'react-i18next';
import  { useState } from 'react';

//Import
import Modal from 'jy-oc-p14-ma-bibliotheque-de-composants';

/**
 * ContactForm gère la soumission d'un formulaire de contact avec validation des champs,
 * affichage des erreurs et confirmation via un modal.
 */

const ContactForm = () => {
    const { t } = useTranslation();
    
    // État pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({});
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false)
      const [isNoValidForm, setIsNoValidForm] = useState(true)

      // URL de base de l'API
        const BASE_URL = import.meta.env.VITE_API_URL;


       // Gère les changements dans les champs du formulaire et met à jour l'état
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
       
    
        // validations spécifiques pour effacer immédiatement une erreur lorsque l'utilisateur commence à corriger son entrée.
        let fieldError = '';
        switch (name) {
            case 'fullName':
                if (!value.trim() || value.length < 5) {
                    fieldError = t('contact.error.fullName');
                }
                break;
            case 'email':
                if (!value.trim() || !/\S+@\S+\.\S+/.test(value)) {
                    fieldError = t('contact.error.email');
                }
                break;
            case 'phone':
                if (!value.trim() || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)) {
                    fieldError = t('contact.error.phone');
                }
                break;
            case 'subject':
                if (!value.trim() || value.length < 3) {
                    fieldError = t('contact.error.subject');
                }
                break;
            case 'message':
                if (!value.trim() || value.length < 3) {
                    fieldError = t('contact.error.message');
                }
                break;
            default:
                break;
        }
    
        // Mettre à jour l'état des erreurs uniquement pour le champ en cours de modification
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: fieldError
        }));
        validateForm();
    };

        // Validation globale du formulaire avant la soumission
      const validateForm = () => {
        let newErrors = {};
      
        // Validation du nom complet : ne doit pas être vide
        if (!formData.fullName.trim()|| formData.fullName.length < 5) {
          newErrors.fullName = t('contact.error.fullName');
        }
      
        // Validation de l'email : doit correspondre à un format d'email valide
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = t('contact.error.email');
        }
      
        // Validation du téléphone : doit correspondre à un format de téléphone valide
        if (!formData.phone.trim() || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(formData.phone)) {
          newErrors.phone = t('contact.error.phone');
        }
      
        // Validation de l'objet : doit contenir au moins 5 caractères
        if (!formData.subject.trim() || formData.subject.length < 3) {
          newErrors.subject = t('contact.error.subject');
        }
      
        // Validation du message : doit contenir au moins 5 caractères
        if (!formData.message.trim() || formData.message.length < 3) {
          newErrors.message = t('contact.error.message');
        }
      
        setErrors(newErrors);

        // Déterminer si le formulaire est valide
        const formIsValid = Object.keys(newErrors).length === 0;

        // Mettre à jour l'état pour indiquer si le formulaire est valide ou non
        setIsNoValidForm(!formIsValid);
        

        return formIsValid;
      };
      
       // Gère la soumission du formulaire
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        if (validateForm()) {

            const response = await fetch(`${BASE_URL}/contact`, {
                method:"POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

             // Réinitialiser le formulaire ici
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Afficher le modal de confirmation
            setIsModalOpen(true);
            
            if (data.success === true) {
                setIsSubmitting(false)
            }
        } else {
            console.log('Validation failed');
        }
    };

  


  return (
        <form className='formContainer' onSubmit={handleSubmit}>

        {/* Nom et Prénom */}
        <div className="form-group">
            <label htmlFor="fullName">{t('contact.fullName')}</label>
            <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder={t('contact.fullNamePlaceholder')}
            value={formData.fullName}
            onChange={handleChange} 
            />
            {errors.fullName && <div className="error">{t('contact.error.fullName')}</div>}
        </div>

        {/* Email */}
        <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder={t('contact.emailPlaceholder')} 
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="error">{t('contact.error.email')}</div>}
            </div>

            {/* Téléphone */}
            <div className="form-group">
                <label htmlFor="phone">{t('contact.phone')}</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder={t('contact.phonePlaceholder')} 
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <div className="error">{t('contact.error.phone')}</div>}
            </div>

            {/* Objet */}
            <div className="form-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder={t('contact.subjectPlaceholder')} 
                    value={formData.subject}
                    onChange={handleChange}
                />
                {errors.subject && <div className="error">{t('contact.error.subject')}</div>}
            </div>

            {/* Message */}
            <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder={t('contact.messagePlaceholder')} 
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <div className="error">{t('contact.error.message')}</div>}
            </div>

            {/* Bouton Envoyer */}
            {
            isSubmitting ? (
            <button type="sending">
                {t('contact.sendingInProgress')}  {/* Affichage en cours d'envoi */}
            </button>
            ) :
             isNoValidForm ? (
            <button type="button">
                {t('contact.send')}  {/* Bouton non cliquable car le formulaire n'est pas valide */}
            </button>
            ) : (
            <button type="submit">
                {t('contact.send')}  {/* Bouton pour soumettre le formulaire */}
            </button>
            )}



            {/* modal message envoyé*/}
            <Modal
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                modalClasse="modalSendEmail"
                content={t('contact.messageModalSendMessage')} 
                contentClass="modalSendEmail__content" 
                escapeClose={true}
                closeOnClickOutside={true}
                disableScroll={true}
                closeClass="modalSendEmail__iconCLose"
                centeredModal={true} 
                fadeDurationOverlay={300} 
                fadeDelayOverlay={300}  
                fadeDurationModal={500} 
                fadeDelayModal={500} 
            />
        </form>
    );
};
export default ContactForm