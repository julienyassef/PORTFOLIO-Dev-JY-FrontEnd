

export const getContentToolsMock = async () => {

    const mockContentTools = [
        {"id": "html", "name": "HTML", "logo": "http://localhost:3000/src/assets/LogoTools/html.png"},
        {"id": "css", "name": "CSS", "logo": "http://localhost:3000/src/assets/LogoTools/css3.png"},
        {"id": "ts", "name": "TypeScript", "logo": "http://localhost:3000/src/assets/LogoTools/logos_typescript-icon.png"},
        {"id": "js", "name": "JavaScript", "logo": "http://localhost:3000/src/assets/LogoTools/javaScriptLogo.png"},
        {"id": "angular", "name": "Angular", "logo": "http://localhost:3000/src/assets/LogoTools/angular.png"},
        {"id": "react", "name": "React", "logo": "http://localhost:3000/src/assets/LogoTools/logos_react.png"},
        {"id": "sass", "name": "SASS", "logo": "http://localhost:3000/src/assets/LogoTools/logos_sass.png"},
        {"id": "figma", "name": "Figma", "logo": "http://localhost:3000/src/assets/LogoTools/logos_figma.png"},
        {"id": "nextjs", "name": "Nextjs", "logo": "http://localhost:3000/src/assets/LogoTools/ri_nextjs-fill.png"},
        {"id": "expressjs", "name": "Expressjs", "logo": "http://localhost:3000/src/assets/LogoTools/logos_expressjs.png"},
        {"id": "docker", "name": "Docker", "logo": "http://localhost:3000/src/assets/LogoTools/logos_docker.png"},
        {"id": "git", "name": "Git", "logo": "http://localhost:3000/src/assets/LogoTools/logos_git.png"},
        {"id": "nodejs", "name": "Nodejs", "logo": "http://localhost:3000/src/assets/LogoTools/logos_nodejs.png"},
        {"id": "mongodb", "name": "MongoDB", "logo": "http://localhost:3000/src/assets/LogoTools/skill-icons_mongodb.png"},
        {"id": "swagger", "name": "Swagger", "logo": "http://localhost:3000/src/assets/LogoTools/swaggerLogo.png"}
    ];
    


    // Simuler un délai pour l'opération asynchrone, par exemple une requête réseau
    await new Promise(resolve => setTimeout(resolve, 1000));

    return mockContentTools;
};



export const getContentProjectsMock = async () => {

    const mockContentProjects = [
        {
          "name": "Mon Portfolio ",
          "img": "PortfolioJY.png",
          "linkCode": "https://github.com/julienyassef/PORTFOLIO-Dev-JY.git",
          "linkSite": "https://julienyassef.com",
          "Desc": {
            "FR": "Dans ce projet, j'ai décidé de créer chaque élément de A à Z, sans importer de bibliothèques ou de composants préfabriqués. Mon objectif était de montrer ma maîtrise de chaque aspect du développement et de créer un portfolio unique et personnalisé qui reflète pleinement mes compétences et mes acquis.\n\nTous les composants ont été créés pour ce projet, à l'exception d'une modal que j'ai intégrée. Cette modal est ma propre création, conçue lors d'une formation et publiée sur npm. Je l'ai incluse dans le formulaire de contact pour démontrer ma capacité à utiliser un composant personnalisable via les props.\n\nPour la réalisation de ce portfolio, j'ai utilisé un stack technologique complet, comprenant React et JavaScript pour le développement frontend, Node.js et Express.js pour le développement backend, ainsi que MongoDB pour la gestion de la base de données.\n\nMon portfolio est entièrement responsive, s'adaptant à différents appareils pour offrir une expérience utilisateur optimale sur les smartphones, tablettes et ordinateurs de bureau.\n\nL'une des fonctionnalités spécifiques de mon portfolio est la possibilité de personnaliser l'interface pour permettre aux utilisateurs de naviguer en fonction de leurs préférences. Pour cela, j'ai intégré la possibilité de changer la couleur du thème du site à travers une palette de couleurs prédéfinie. Je propose également deux modes : clair et sombre. De plus, mon portfolio est entièrement multilingue, offrant une version en français et en anglais.\n\nEn résumé, mon portfolio est le fruit de mes compétences et de ma créativité en tant que développeur web. Il démontre ma capacité à concevoir et à mettre en œuvre des solutions techniques innovantes tout en offrant une expérience utilisateur optimale, quel que soit le périphérique utilisé. En plus du développement, j'ai également conçu le design et réalisé les maquettes sur Figma.",
            "EN": "In this project, I decided to create every element from scratch, without importing any libraries or prefabricated components. My goal was to showcase my mastery of every aspect of development and to create a unique and personalized portfolio that fully reflects my skills and accomplishments.\n\nAll components were crafted specifically for this project, with the exception of a modal that I integrated. This modal is my own creation, conceived during a training session and published on npm. I included it in the contact form to demonstrate my ability to use a customizable component via props.\n\nFor the realization of this portfolio, I utilized a comprehensive technological stack, including React and JavaScript for frontend development, Node.js and Express.js for backend development, along with MongoDB for database management.\n\nMy portfolio is fully responsive, adapting seamlessly to various devices to offer an optimal user experience on smartphones, tablets, and desktop computers.\n\nOne of the unique features of my portfolio is the ability to customize the interface to allow users to navigate according to their preferences. To achieve this, I integrated the option to change the theme color of the site through a predefined color palette. I also offer two modes: light and dark. Furthermore, my portfolio is fully multilingual, providing versions in both French and English.\n\nIn summary, my portfolio is the result of my skills and creativity as a web developer. It demonstrates my ability to design and implement innovative technical solutions while providing an optimal user experience regardless of the device used. In addition to development, I also designed the interface and created the mockups using Figma."
          },
          "Skills": [
            {
              "name": "JavaScript",
              "id": "js",
              "logo": "javaScriptLogo.png"
            },
            {
              "name": "React",
              "id": "react",
              "logo": "logos_react.png"
            },
            {
              "name": "HTML",
              "id": "html",
              "logo": "html.png"
            },
            {
              "name": "CSS",
              "id": "css",
              "logo": "css3.png"
            },
            {
              "name": "SASS",
              "id": "sass",
              "logo": "logos_sass.png"
            },
            {
              "name": "Node.js",
              "id": "nodejs",
              "logo": "logos_nodejs.png"
            },
            {
              "name": "Express.js",
              "id": "expressjs",
              "logo": "logos_expressjs.png"
            },
            {
              "name": "MongoDB",
              "id": "mongodb",
              "logo": "skill-icons_mongodb.png"
            },
            {
              "name": "Docker",
              "id": "docker",
              "logo": "logos_docker.png"
            },
            {
              "name": "Tailwind",
              "id": "tailwind",
              "logo": "tailwind.png"
            }
          ]
        },
        {
          "name": "Explorateur du Système Soleil",
          "img": "SystemeSolaireExplorer.jpg",
          "linkCode": "https://github.com/julienyassef/SolarSystemExplorer.git",
          "linkSite": "https://julienyassef.github.io/SolarSystemExplorer/",
          "Desc": {
            "FR": "En quête constante de progession dans mes compétences et souhaitant démontrer ma polyvalence en tant que développeur front-end, j'ai choisi d'utiliser Angular pour ce projet, malgré une formation initiale centrée sur React. Cette démarche témoigne de ma capacité  à acquérir de nouvelles connaissances rapidement mais aussi à m'adapter avec agilité à différents frameworks.\n\nLe projet SolarSystem Explorer se distingue par une interface utilisateur dynamique, capable de s'adapter de manière fluide en fonction de la navigation. Parmi les fonctionnalités clés, j'ai implémenté un système de changement dynamique du header, qui se modifie selon la page consultée, renforçant ainsi l'expérience utilisateur.\n\nL'architecture de SolarSystem Explorer a été soigneusement élaborée pour maximiser la réutilisation des composants. Entièrement responsive, le site offre une expérience utilisateur optimale sur tous les formats.\n\nUn système de routage avancé enrichit le projet qui intègre un loader pour les transitions de pages, et une page d'erreur pour les itinéraires non valides . Les données récupérées via une API externe sont exploitées à divers niveaux, tant pour l'affichage que pour des logiques de tri ou de routage.",
            "EN": "In constant pursuit of advancing my skills and aiming to demonstrate my versatility as a front-end developer, I chose to use Angular for this project, despite my initial training being centered on React. This approach is a testament to my ability to quickly acquire new knowledge and adapt agilely to various frameworks.\n\nThe SolarSystem Explorer project stands out with a dynamic user interface that smoothly adjusts according to navigation. Among the key features, I have implemented a dynamic header system that changes based on the page being viewed, thereby enhancing the user experience.\n\nThe architecture of SolarSystem Explorer has been meticulously designed to maximize component reusability. Fully responsive, the site provides an optimal user experience across all devices.\n\nAn advanced routing system enhances the project, incorporating a loader for page transitions and an error page for invalid routes. Data retrieved via an external API is utilized at various levels, both for display purposes and for sorting or routing logic."
          },
          "Skills": [
            {
              "name": "TypeScript",
              "id": "ts",
              "logo": "logos_typescript-icon.png"
            },
            {
              "name": "Angular",
              "id": "angular",
              "logo": "angular.png"
            },
            {
              "name": "HTML",
              "id": "html",
              "logo": "html.png"
            },
            {
              "name": "CSS",
              "id": "css",
              "logo": "css3.png"
            },
            {
              "name": "SASS",
              "id": "sass",
              "logo": "logos_sass.png"
            }
          ]
        },
        {
          "name": "Blog: Objectif-Dev",
          "img": "ObjectifDev.png",
          "linkCode": "",
          "linkSite": "",
          "Desc": {
            "FR": "Pour ce projet, j'ai décidé de le développer avec Next.js pour sa performance et sa flexibilité, et de le styliser avec Tailwind CSS pour un design moderne et réactif. En utilisant ces technologies, je montre ma capacité à m'adapter à divers frameworks et outils de développement. À travers ce blog, je souhaite fournir des ressources utiles et des récits inspirants pour ceux qui souhaitent suivre un chemin similaire. Explorez mon blog pour voir comment j'ai transformé ma passion pour la technologie en une nouvelle carrière.",
            "EN": "For this project, I chose to develop it with Next.js for its performance and flexibility, and styled it with Tailwind CSS for a modern and responsive design. By using these technologies, I demonstrate my ability to adapt to various frameworks and development tools. Through this blog, I aim to provide useful resources and inspiring stories for those who wish to follow a similar path. Explore my blog to see how I transformed my passion for technology into a new career."
          },
          "Skills": [
            {
              "name": "TypeScript",
              "id": "ts",
              "logo": "logos_typescript-icon.png"
            },
            {
              "name": "Nextjs",
              "id": "nextjs",
              "logo": "ri_nextjs-fill.png"
            },
            {
              "name": "Tailwind",
              "id": "tailwind",
              "logo": "tailwind.png"
            },
            {
              "name": "HTML",
              "id": "html",
              "logo": "html.png"
            },
            {
              "name": "MongoDB",
              "id": "mongodb",
              "logo": "skill-icons_mongodb.png"
            },
            {
              "name": "Docker",
              "id": "docker",
              "logo": "logos_docker.png"
            }
          ]
        }
      ]


    // Simuler un délai pour l'opération asynchrone, par exemple une requête réseau
    await new Promise(resolve => setTimeout(resolve, 1000));

    return mockContentProjects;
};
