//Scss
import './DisplayCardsTools.scss'

//Data
import useData from '../../hooks/useData.jsx'

/**
 * DisplayCardsTools est un composant qui affiche des cartes représentant différents outils.
 * Il utilise un hook personnalisé pour charger les données des outils.
 */


const DisplayCardsTools = () => {
    // Utilisation du hook personnalisé useData pour obtenir les données des outils,
    // ainsi que les états de chargement et d'erreur
    const { dataTools, isLoading, isError } = useData()

    
    // Gestion de l'affichage en cas d'erreur de chargement des données
    if (isError) {
      return <p style={{marginLeft: "200px", marginTop: "200px"}}>Error 404</p>;
    }

    // Gestion de l'affichage pendant le chargement des données
    if (isLoading) {
      return <p style={{marginLeft: "200px", marginTop: "200px"}}>Loading...</p>;
    }

    // Utilisation des données chargées pour afficher les cartes d'outils
    const tools = dataTools;
  
   
    return (
      <div className='container' >
        {tools.map((tool) => (
          <div className='container__cardTool'  key={tool.id}>
            <div className='container__cardTool__containerLogo' >
              <img className='container__cardTool__logo' src={`./assets/LogoTools/${tool.logo}`} alt={tool.name} />
            </div>
            <h3 className='container__cardTool__name' >{tool.name}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default DisplayCardsTools;