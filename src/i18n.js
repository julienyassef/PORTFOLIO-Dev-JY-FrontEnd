import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Vos traductions
const resources = {
  EN: {
    translation: {
      navbar: {
        home: "HOME",
        about: "ABOUT",
        skills: "SKILLS",
        projects: "PROJECTS",
        resume: "RESUME",
        contact: "CONTACT",
        themeColor: "THEME COLOR"
      },
      home: {
        job: "Full Stack Developer",
        job2: "Specialized Front End",
        pickUpLine:
          "From concept to creation: follow the thread of my projects.",
      },
      about: {
        about: "ABOUT",
        presentationTitle: " New Chapter: From Social to Web",
        presentationPartie1: "After several enriching years in the social sector, where I had the opportunity to work as an educator and service manager, I made the bold decision to professionally reorient myself to a field that has always fascinated me: web development.",
        presentationPartie2: "The dynamism, creativity, and constant innovation of the technology sector have always attracted me. To make this transition a reality, I enrolled in a web developer training program specializing in JavaScript/React with OpenClassrooms.",
        presentationPartie3: "Today, I am proud to announce that I have successfully completed this training, marking the beginning of my career as a web developer. To strengthen my skills and better meet the demands of the industry, I also deepened my knowledge in Angular and TypeScript, highly sought-after front-end technologies. To have an overview of development and better collaborate with back-end teams, I also enhanced my technical skills by working with Node.js, Express, MongoDB, and Docker, essential tools for building and managing modern web applications.",
        presentationPartie4: "In addition to my technical skills, I bring interpersonal skills acquired in social settings, such as communication, problem-solving, teamwork, stress management, and time management, which are essential assets for collaborating on complex projects and successfully carrying out innovative developments. My ability to adapt and learn quickly has also enabled me to successfully transition careers, and will be crucial for adapting to the various languages and technologies I will encounter in my future experiences.",
        presentationPartie6: "I am excited to explore collaboration opportunities, freelancing, or corporate positions, where I can bring my unique perspective combining social experience and technical skills. I am convinced that my ability to manage teams and communicate in the social sector will be a major asset in the technological field.",
        presentationPartie7: "Thank you to all those who have supported me on this transformative journey. I am eager to share with you the fruits of this new adventure.",
        presentationPartie8: "Feel free to check out my profile to learn more about my projects and background. Collaboration opportunities or advice from you will be greatly appreciated! ",
        linkProjects: "Explore some of my projects",
      },
      skills: {
        skills: "SKILLS",
        titleTools: "Mastered Tools",
        titleSkills: "Areas of Skills",
        listSkills: [
          {
              key: "skillsOne",
              text: "Creating dynamic user interfaces",
          },
          {
              key: "skillsTwo",
              text: "DOM manipulation",
          },
          {
              key: "skillsThree",
              text: "Responsive Design",
          },
          {
              key: "skillsFour",
              text: "Front-End performance optimization",
          },
          {
              key: "skillsFive",
              text: "Prototyping and design",
          },
          {
              key: "skillsSix",
              text: "Search engine optimization (SEO)",
          },
          {
              key: "skillsSeven",
              text: "Sustainable development",
          },
          {
              key: "skillsEight",
              text: "Web accessibility approach",
          },
          {
              key: "skillsNine",
              text: "Unit and integration testing",
          },
          {
              key: "skillsTen",
              text: "Full Stack development",
          },
          {
              key: "skillsEleven",
              text: "Creating and managing CI/CD pipelines",
          },
          {
              key: "skillsTwelve",
              text: "Managing containers with Docker",
          },
          {
              key: "skillsThirteen",
              text: "Developing and managing backend servers",
          },
          {
              key: "skillsFourteen",
              text: "Using and managing databases (MongoDB)",
          },
          {
              key: "skillsFifteen",
              text: "Version control with Git and GitHub",
          },
          {
              key: "skillsSixteen",
              text: "Security and authentication (OAuth, JWT)",
          },
          {
              key: "skillsSeventeen",
              text: "Developing RESTful APIs",
          },
          {
              key: "skillsEighteen",
              text: "Problem-solving and troubleshooting",
          }
      ],
      },
      projects: {
        projects: "PROJECTS",
        explore: "Explore my achievements and discover the projects I have worked on, using various technologies and tools to create innovative solutions.",
        learnMore: "Learn more",
        pickUpLine:
          "Crafting captivating and intuitive digital experiences, one line of code at a time.",
      },
      resume: {
        resume: "RESUME",
        download: "Download CV",
      },
      contact: {
        contact: "CONTACT",
        h2: "SEND ME A MESSAGE",
        job: "Full Stack Developer",
        job2: "Specialized Front End",
        phone: "Phone",
        professionalnetwork: "Professional Network",
        error: {
          fullName: "Please enter your full name.",
          email: "Please enter a valid email address.",
          phone: "Please enter a valid phone number.",
          subject: "Please enter the subject of your message.",
          message: "Please enter your message.",
        },
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        email: "Email",
        emailPlaceholder: "Enter your email",
        phonePlaceholder: "Enter your phone number",
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
        message: "Message",
        messagePlaceholder: "Type your message here",
        send: "Send",
        sendingInProgress : "Sending in progress ...",
        messageModalSendMessage: "Your email has been sent.",
      },
      footer: {
        job: "Full Stack Developer",
        job2: "Specialized Front End",
        contact: "CONTACT",
        legalmentions: "LEGAL MENTIONS",
        sitemap: "SITE MAP",
        privacypolicy: "PRIVACY POLICY",
        allRightsReserved: "ALL RIGHTS RESERVED",
      },
      siteMap: {
        title: "Site Map",
        home: "HOME",
        legalmentions: "LEGAL MENTIONS",
        sitemap: "SITE MAP",
        privacypolicy: "PRIVACY POLICY",
      },
      notFound: {
        title: "PAGE ERROR",
        home: "HOME",
        sousTitle: "Error 404",
        description: "Sorry, the page you are looking for cannot be found. Click the link below to return to the homepage."
    },
      modalProjects: {
        learnMore: "Learn More",
        usedTools: "Used Tools",
        sourceCode: "Source Code",
        seeTheProject: "See the Project",
        codeUnavailable: "The code will be available soon",
        siteUnavailable: "The site will be available soon"
    },
    legal: {
      title: "Legal Notices",
      lawText: "In accordance with the provisions of article 6-III and 19 of the Law n° 2004-575 of June 21, 2004 on Confidence in the Digital Economy, known as L.C.E.N., we inform visitors of the website: julienyassef.fr of the following data:",
      titlelegalinformation: "Legal Information",
      ownerInfo: "Site Owner: Julien Yassef",
      ownerAddress: "Owner's Address: 33300 Bordeaux",
      contactEmail: "Contact Email: contact@julienyassef.fr",
      webmasterInfo: "Webmaster: Julien Yassef",
      webmasterContact: "Contact the Webmaster: contact@julienyassef.fr",
      hostingProvider: "Hosting:",
      hostingDetailsLine1: "OVH SAS",
      hostingDetailsLine2: "SAS with a capital of €10,069,020...",
      hostingDetailsLine3: "Lille Métropole Trade and Companies Register 424 761 419 00045",
      hostingDetailsLine4: "APE Code 2620Z",
      hostingDetailsLine5: "VAT No.: FR 22 424 761 419",
      hostingDetailsLine6: "Head Office: 2 rue Kellermann - 59100 Roubaix - France",
      titlePresentation: "Presentation and Principle",
      presentationLine1: "Any Internet user who connects and uses the site mentioned above: julienyassef.fr is considered a user of the site.",
      presentationLine2: "The site julienyassef.fr offers a range of services, made available to users. It is specified that they must remain courteous and act in good faith towards other users as well as towards the webmaster of the site julienyassef.fr. The site julienyassef.fr is regularly updated by Julien Yassef.",
      titleAccessibility: "Accessibility",
      accessibilityGeneral: "The site julienyassef.fr is generally accessible to users 24/7, except in case of scheduled or unscheduled maintenance for maintenance needs or in case of force majeure. If access to the service is not possible, julienyassef.fr will do its best to restore access to the site and will endeavor to inform users in advance of the Dates & times of the interruption. Being subject only to an obligation of means, julienyassef.fr cannot be held responsible for any damages, of any nature, resulting from the unavailability of the service",
      titleIntellectualPropertyRights: "Intellectual Property Rights",
      intellectualPropertyRightsLine1: "Julien Yassef is the exclusive owner of all intellectual property rights or holds the rights of use on all elements accessible on the site, both in terms of the structure and the texts, graphics, images, logos, icons, sounds, software.",
      intellectualPropertyRightsLine2: "Any total or partial reproduction of the site julienyassef.fr, representation, modification, publication, total or partial adaptation of any of its elements, by any means or process used, is prohibited, except prior written authorization from Julien Yassef. Otherwise, it will be considered as constituting an infringement and liable to prosecution according to the provisions of articles L.335-2 et seq. of the Intellectual Property Code.",
      titleHypertextLinks: "Hypertext Links and Cookies",
      hyperlinksLine1: "The site julienyassef.fr contains a number of hypertext links to other sites, set up with the authorization of Julien Yassef. However, Julien Yassef does not have the possibility to check the content of the sites thus visited, and therefore assumes no responsibility for this fact.",
      hyperlinksLine2: "Browsing the site julienyassef.fr may cause the installation of cookie(s) on the user's computer. A cookie is a small file, which does not allow the identification of the user, but which records information relating to the navigation of a computer on a site. The data thus obtained aim to facilitate subsequent navigation on the site, and are also intended to allow various measures of attendance.",
      hyperlinksLine3: "The refusal to install a cookie may make it impossible to access certain services. The user can however configure his computer to refuse the installation of cookies.",
      titleProtectionofProperty: "Protection of Property and Persons - Personal Data Management",
      personalDataUsageLine1: "In France, personal data is, for example, protected by law n° 78-87 of January 6, 1978 and law n° 2004-801 of August 6, 2004, article L. 226-13 of the Penal Code and the European Directive of October 24, 1995.",
      personalDataUsageLine2: "On the website julienyassef.fr, Julien Yassef does not collect personal information (according to article 4 of law n° 78-17 of January 6, 1978) concerning the user except for the need of certain services offered by the site julienyassef.fr. The user provides this data knowingly, particularly when he enters it himself. It is then explained to the user of the site julienyassef.fr the obligation or not to enter this information.",
      personalDataUsageLine3: "In accordance with the provisions of articles 38 et seq. of the law of January 6, 1978 relating to computing, files and liberties, any user has the right to access, rectify, delete and oppose personal data concerning him. To exercise this right, send your request to julienyassef.fr by email: contact@julienyassef.fr.",
      personalDataUsageLine4: "No personal information of the user of the site julienyassef.fr is published without the user's knowledge, exchanged, transferred, assigned or sold on any medium to others. Only the assumption of the redemption of the site julienyassef.fr and its rights allows Julien Yassef to transmit said information to the prospective purchaser who would then be given the same obligation to store and modify data concerning the user of the site julienyassef.fr. The website julienyassef.fr complies with the GDPR.",
      personalDataUsageLine5: "The databases are protected by the provisions of the law of July 1, 1998 transposing the directive 96/9 of March 11, 1996 concerning the legal protection of databases."
    }
    
    },
  },
  FR: {
    translation: {
      navbar: {
        home: "ACCEUIL",
        about: "À PROPOS",
        skills: "COMPÉTENCES",
        projects: "PROJETS",
        resume: "CURRICULUM",
        contact: "CONTACT",
        themeColor: "COULEUR DU THÈME"
      },
      home: {
        job: "Développeur Full Stack",
        job2: "Spécialisé Front End",
        pickUpLine:
          "De l'idée à la réalisation : suivez le fil de mes créations.",
      },
      about: {
        about: "À PROPOS",
        presentationTitle: " Nouveau Chapitre: Du social au web",
        presentationPartie1: "Après plusieurs années enrichissantes dans le secteur social, où j'ai eu l'opportunité d'exercer en tant qu'éducateur et chef de service, j'ai pris la décision audacieuse de me réorienter professionnellement vers un domaine qui me passionne depuis toujours : le développement web.",
        presentationPartie2: "Le dynamisme, la créativité et l'innovation perpétuelle du secteur technologique m'ont toujours attiré. Ainsi, pour concrétiser cette transition, je me suis inscrit à une formation de développeur web spécialisé en JavaScript/React avec OpenClassrooms.",
        presentationPartie3: "Aujourd'hui, je suis fier d'annoncer que j'ai complété avec succès cette formation, marquant ainsi le début de ma carrière en tant que développeur web. Pour renforcer mes compétences et mieux répondre aux demandes du secteur, j'ai également approfondi mes connaissances en Angular et TypeScript, des technologies front-end très demandées. Pour avoir une vue d'ensemble sur le développement et mieux collaborer avec les équipes back-end, j'ai également approfondi mes compétences techniques en travaillant avec Node.js, Express, MongoDB, et Docker, des outils essentiels pour la construction et la gestion d'applications web modernes.",
        presentationPartie4: "En plus de mes compétences techniques, j'apporte mes compétences interpersonnelles acquises dans le social, telles que la communication, la résolution de problème, le travail en équipe, la gestion du stress et du temps qui sont des atouts essentiels pour collaborer sur des projets complexes et mener à bien des développements innovants. Ma capacité à m'adapter et à apprendre rapidement m'ont également permis de réussir ma transition de carrière, et seront cruciales pour m'adapter aux différents langages et technologies que je rencontrerai dans mes futurs expériences",
        presentationPartie6: "Je suis enthousiaste à l'idée d'explorer les opportunités de collaboration, de freelance ou de poste en entreprise, où je pourrais apporter ma perspective unique combinant expérience sociale et compétences techniques. Je suis convaincu que ma capacité à gérer des équipes et à communiquer dans le secteur social sera un atout majeur dans le domaine technologique. ",
        presentationPartie7: "Merci à tous ceux qui m'ont soutenu dans ce voyage de transformation. Je suis impatient de partager avec vous les fruits de cette nouvelle aventure.",
        presentationPartie8: "N'hésitez pas à consulter mon profil pour en savoir plus sur mes projets et mon parcours. Les opportunités de collaboration ou les conseils de votre part seront grandement appréciés ! ",
        linkProjects: "Consultez quelques-unes de mes réalisations",
      },
      skills: {
        skills: "COMPÉTENCES",
        titleTools: "Outils Maitrisés ",
        titleSkills: "Domaines de Compétences",
        listSkills: [
          {
              key: "skillsOne",
              text: "Création d'interfaces utilisateurs dynamiques",
          },
          {
              key: "skillsTwo",
              text: "Manipulation du DOM",
          },
          {
              key: "skillsThree",
              text: "Responsive Design",
          },
          {
              key: "skillsFour",
              text: "Optimisation des performances Front-End",
          },
          {
              key: "skillsFive",
              text: "Prototypage et conception",
          },
          {
              key: "skillsSix",
              text: "Optimisation pour les moteurs de recherche",
          },
          {
              key: "skillsSeven",
              text: "Développement durable",
          },
          {
              key: "skillsEight",
              text: "Approche de l'accessibilité web",
          },
          {
              key: "skillsNine",
              text: "Réalisation de tests unitaires et d'intégration",
          },
          {
              key: "skillsTen",
              text: "Développement Full Stack",
          },
          {
              key: "skillsEleven",
              text: "Création et gestion de pipelines CI/CD",
          },
          {
              key: "skillsTwelve",
              text: "Gestion des conteneurs avec Docker",
          },
          {
              key: "skillsThirteen",
              text: "Développement et gestion de serveurs backend",
          },
          {
              key: "skillsFourteen",
              text: "Utilisation et gestion de bases de données",
          },
          {
              key: "skillsFifteen",
              text: "Gestion de version avec Git et GitHub",
          },
          {
              key: "skillsSixteen",
              text: "Sécurité et authentification (OAuth, JWT)",
          },
          {
              key: "skillsSeventeen",
              text: "Développement d'API RESTful",
          },
          {
              key: "skillsEighteen",
              text: "Résolution de problèmes et dépannage",
          }
      ],
      },
      projects: {
        projects: "PROJETS",
        explore: "Explorez mes réalisations et découvrez les projets sur lesquels j'ai travaillé, utilisant diverses technologies et outils pour créer des solutions innovantes.",
        learnMore: "En savoir plus",
        pickUpLine:
          "Créer des expériences numériques captivantes et intuitives, une ligne de code à la fois.",
      },
      resume: {
        resume: "CURRICULUM",
        download: "Télécharger CV",
      },
      contact: {
        contact: "CONTACT",
        h2: "ENVOYEZ-MOI UN MESSAGE",
        job: "Développeur Full Stack",
        job2: "Spécialisé Front End",
        phone: "Téléphone",
        professionalnetwork: "Réseau Professionnel",
        error: {
          fullName: "Veuillez entrer votre nom complet.",
          email: "Veuillez entrer un email valide.",
          phone: "Veuillez entrer un numéro de téléphone valide.",
          subject: "Veuillez entrer l'objet de votre message.",
          message: "Veuillez entrer votre message.",
        },
        fullName: "Nom et Prénom",
        fullNamePlaceholder: "Entrez votre nom et prénom",
        email: "Email",
        emailPlaceholder: "Entrez votre email",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        subject: "Objet",
        subjectPlaceholder: "Sujet de votre message",
        message: "Message",
        messagePlaceholder: "Tapez votre message ici",
        send: "Envoyer",
        sendingInProgress : "Envoi en cours ...",
        messageModalSendMessage: "Votre email a bien été envoyé.",
      },
      footer: {
        job: "Développeur Full Stack",
        job2: "Spécialisé Front End",
        contact: "CONTACT",
        legalmentions: "MENTIONS LÉGALES",
        sitemap: "PLAN DU SITE",
        privacypolicy: "POLITIQUE DE CONFIDENTIALITÉ",
        allRightsReserved: "TOUS DROITS RÉSERVÉS",
      },
      siteMap: {
        title: "Plan du Site",
        home: "ACCUEIL",
        legalmentions: "MENTIONS LÉGALES",
        sitemap: "PLAN DU SITE",
        privacypolicy: "POLITIQUE DE CONFIDENTIALITÉ",
      },
      notFound: {
        title: "PAGE ERROR",
        home: "ACCUEIL",
        sousTitle: "Erreur 404",
        description: "Désolé la page que vous cherchez est introuvable. Cliquez sous lien ci-dessous pour retourner à la page d'acceuil"
      },
      modalProjects: {
        learnMore: "En savoir plus",
        usedTools: "Outils utilisés",
        sourceCode: "Code Source",
        seeTheProject: "Voir le Projet",
        codeUnavailable: "Le code sera bientôt disponible",
        siteUnavailable: "Le site sera bientôt en ligne"
      },
      legal: {
        title: "Mentions Légales",
        lawText : "Correspondant aux dispositions de l'article 6-III et 19 de la Loi n* 2004-575 du 21 juin 2004 relative à la Confiance en l'économie numérique, dite L.C.E.N., nous informons les visiteurs du site internet : julienyassef.fr Des données suivantes:",
        titlelegalinformation: "Informations légales",
        ownerInfo: "Propriétaire du site : Julien Yassef",
        ownerAddress: "Adresse de localisation du propriétaire : 33300 Bordeaux",
        contactEmail: "Email de contact : contact@julienyassef.fr",
        webmasterInfo: "Webmaster : Julien Yassef",
        webmasterContact: "Contact Webmaster : contact@julienyassef.fr",
        hostingProvider: "Hébergement :",
        hostingDetailsLine1: "OVH SAS",
        hostingDetailsLine2: "SAS au capital de 10 069 020 €...",
        hostingDetailsLine3: "Registre du Commerce et des Sociétés de Lille Métropole 424 761 419 00045  ",
        hostingDetailsLine4: "Code APE 2620Z ",
        hostingDetailsLine5: "Num. TVA : FR 22 424 761 419",
        hostingDetailsLine6: "Siège social : 2 rue Kellermann - 59100 Roubaix - France",
        titlePresentation: "Présentation et principe",
        presentationLine1: "Est considéré comme utilisateur :Tout internaute se connectant et utilisant le site susnommé : julienyassef.fr. ",
        presentationLine2: "Le site julienyassef.fr regroupe un ensemble de services, mis à disposition des utilisateurs. Il est précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site julienyassef.fr. Le site julienyassef.fr est mis à jour régulièrement par Julien Yassef.",
        titleAccessibility: " Accessibilité",
        accessibilityGeneral: "Le site julienyassef.fr est généralement accessible aux utilisateurs 24/24h, 7/7j, sauf en cas de maintenance, programmée ou pas, pour les besoins de la maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au service, julienyassef.fr, se devouera à faire de son mieux pour rétablir l'accès au site suivant et s'efforcera alors d'informer au préalable aux utilisateurs Dates & heures de l'interruption. N'étant subordonné qu'à une obligation de moyen,julienyassef.fr, ne saurait être tenu comme responsable des dommages, peu importe la nature, résultant d'une indisponibilité du service",
        titleIntellectualPropertyRights:"Droit de propriété intellectuelle",
        intellectualPropertyRightsLine1: "Julien Yassef est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la structure que les textes, graphismes, images, logos, icônes, sons, logiciels.",
        intellectualPropertyRightsLine2: "Toute reproduction totale ou partielle du site julienyassef.fr, représentation, modification, publication, adaptation totale ou partielle de l'un de ses éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Julien Yassef. À défaut, elle sera considérée comme constitutive d'une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
        titleHypertextLinks: "Liens hypertextes et cookies",
        hyperlinksLine1: "Le site julienyassef.fr contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Julien Yassef. Cependant, Julien Yassef n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.",
        hyperlinksLine2: "La navigation sur le site julienyassef.fr est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.",
        hyperlinksLine3: "Le refus d'installation d'un cookie peut entraîner l'impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur pour refuser l’installation des cookies.",
        titleProtectionofProperty:"Protection des biens et des personnes - gestion des données personnelles",
        personalDataUsageLine1: "En France, les données personnelles sont par exemple protégées par la loi n° 78-87 du 6 janvier 1978 et la loi n° 2004-801 datant du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne datant du 24 octobre 1995",
        personalDataUsageLine2: "Sur le site web julienyassef.fr, julien Yassef ne collecte pas d'informations personnelles ( suivant l'article 4 loi n°78-17 du 06 janvier 1978) concernant l'utilisateur que pour le besoin de certains services proposés par le site interne julienyassef.fr. L'usager offre ces données en toute conscience de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors expliqué à l'utilisateur du site julienyassef.fr le devoir ou non de rentrer ces informations.",
        personalDataUsageLine3: "Conformément aux dispositifs des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 en lien avec l'informatique, aux fichiers et aux différentes libertés, n'importe quel utilisateur dispose d'un droit d'accès aux informations, de rectification, de suppression et d'opposition à toutes les informations personnelles qui le concerne. Pour l'utiliser, adressez votre demande à benjamin-leveque.com par mail : contact@julienyassef.fr.",
        personalDataUsageLine4: "Sans information personnelle de l'utilisateur du site julienyassef.fr ne sera publiée à l'insu de l'utilisateur, troquée, transférée, cédée sur un support quelconque à des groupes. Seule l'hypothèse du rachat du site suivant julienyassef.fr et de l'intégralité de ses droits autorise Julien Yassef à céder les informations à l' acquéreur qui serait alors lui-même tenu à la même obligation de conservation et de modification des informations concernant l'utilisateur du site suivant julienyassef.fr. Le site web julienyassef.fr est en conformité avec le RGPD.",
        personalDataUsageLine5: "Les bases de données sont protégées par les obligations de la loi du 1er juillet 1998 transposant ainsi la directive 96/9 du 11 mars 1996 relative à la protection juridique des BDD (bases de données).",
      }
    },
  },
};

i18n
  .use(initReactI18next) // passe i18n down to react-i18next
  .use(LanguageDetector) // détecte la langue du navigateur
  .init({
    resources,
    fallbackLng: "FR", // langue à utiliser si la langue actuelle n'a pas de traductions
    interpolation: {
      escapeValue: false, // réagit déjà à l'échappement
    },
  });

export default i18n;
