import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

//Donnée API
import { getContentTools } from "../utils/apiService/apiService";
import { getContentProjects } from "../utils/apiService/apiService";

//Donnée Mockée
// import { getContentToolsMock } from "../utils/mockApi/mockApi";
// import { getContentProjectsMock } from "../utils/mockApi/mockApi";

export const DataContext = createContext({
    
    isLoading: true,
    isError: false,
})

const DataProvider = ({children}) => {


    const [dataTools, setdataTools] = useState({})
    const [dataProjects, setdataProjects] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    

    // TOOLS DATA
    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await getContentTools();
            //  const data = await getContentToolsMock();
            setdataTools(data);
        } catch (error) {
            setIsError(true);
            console.error('Erreur lors de la récupération des données utilisateur:', error);
        } finally {
            setIsLoading(false);
        }
        };
    
        fetchData();
    }, []);

      // Projects DATA
      useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await getContentProjects();
            //  const data = await getContentProjectsMock();
            setdataProjects(data);
        } catch (error) {
            setIsError(true);
            console.error('Erreur lors de la récupération des données utilisateur:', error);
        } finally {
            setIsLoading(false);
        }
        };
    
        fetchData();
    }, []);
    


    return (
        <DataContext.Provider value={{dataTools, dataProjects, isLoading, isError}}>
            {children} 
        </DataContext.Provider>
    ) 
}

export default DataProvider;

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  