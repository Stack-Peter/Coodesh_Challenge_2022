import React from 'react'

export const GlobalContext = React.createContext();

const Context = ({ children }) => {

  const [showData, setShowData] = React.useState([]);
  const [inputVal, setInputVal] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [ filter, setFilter ] = React.useState(false);
  const [filteredPacient, setFilteredPacient ] = React.useState([]);

  const suaURL = 'http://localhost:3000/'

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://randomuser.me/api/?page=${currentPage}&results=50&seed=abc`);
        const dataJson = await response.json();
        dataJson.results.forEach(pacient => pacient.page = currentPage)
        setShowData([...showData, ...dataJson.results]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    fetchData();
  }, [currentPage]);

  return (
    <GlobalContext.Provider
     value={{
      showData, 
      setShowData,
      currentPage, 
      setCurrentPage,
      loading, 
      setLoading,
      filteredPacient,
      setFilteredPacient,
      filter, 
      setFilter,
      inputVal, 
      setInputVal,
      suaURL
     }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default Context