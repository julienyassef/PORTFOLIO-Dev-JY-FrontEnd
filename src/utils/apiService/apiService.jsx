console.log('API Base URL:', import.meta.env.VITE_API_URL);
const BASE_URL = import.meta.env.VITE_API_URL;
console.log('Fetching from:', `${BASE_URL}/content/tools`);




const fetchData = async (endpoint, options) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


  //Obtenir DATA TOOLS
  const getContentTools = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      return await fetchData('/content/tools', requestOptions);
    } catch (error) {
      throw new Error(error);
    }
  }

  //Obtenir DATA Projects
  const getContentProjects= async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      return await fetchData('/content/projects', requestOptions);
    } catch (error) {
      throw new Error(error);
    }
  }

  export { fetchData, getContentTools, getContentProjects };

