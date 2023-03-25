import About from "./Components/About";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import Layout from "./Components/Layout";
import EditPost from "./Components/EditPost";

import { Route, Routes } from 'react-router-dom';

import { DataProvider } from "./context/DataContext";


function App() {

  return (
  <DataProvider>
  <Routes >
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="edit/:id" element={<EditPost />}>
      </Route>
      <Route path="post"> 
          <Route index element={<NewPost />}/>
          <Route exact path=":id" element={<PostPage />}/>
      </Route>
      <Route exact path="about" element={<About />}/>
      <Route exact path="*" element={<Missing />}/> 
    </Route>  
  </Routes>
  </DataProvider>
  );
}

export default App;
