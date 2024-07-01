// SCSS
import './ThemeSwitcher.scss'

//Import
import { useTheme } from '../../provider/ThemeProvider';


/**
 * Le composant ThemeSwitcher permet à l'utilisateur de basculer entre les thèmes clair et sombre.
 * Il utilise le contexte de thème fourni par ThemeProvider pour lire et modifier le thème actuel.
 */

const ThemeSwitcher = () => {
  // Récupération du thème actuel et de la fonction pour le modifier via le contexte
  const { theme, toggleTheme } = useTheme();

  // Lorsqu'on clique sur le bouton, la fonction toggleTheme est appelée pour changer le thème
  return (
    <div onClick={toggleTheme} className="themeSwitcher">
      {/* Affiche 'Light' si le thème actuel est sombre, sinon 'Dark' */}
      {theme === 'dark' ? 'Light' : 'Dark'}  
    </div>
  );
};

export default ThemeSwitcher; 