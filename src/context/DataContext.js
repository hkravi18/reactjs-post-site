import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
      setPosts(data);  
  },[data]);

  useEffect(() => {
    const filteredArray = posts.filter(post => 
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      || ((post.body).toLowerCase()).includes(search.toLowerCase())
    );
    
    setSearchList(filteredArray.reverse());
  }, [posts, search]); 

  return (
        <DataContext.Provider value={{
            setPosts,
            search, setSearch,
            searchList, fetchError, isLoading,
            posts
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext;