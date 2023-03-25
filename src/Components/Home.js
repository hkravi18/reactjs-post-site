import Feed from "./Feed"

import { useContext } from "react"
import DataContext from "../context/DataContext"

const Home = () => {
  const { searchList:posts, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
        {isLoading && <p className="statusMsg">Loading posts...</p>}
        {!isLoading && fetchError && <p className="statusMsg" styles={{color: "red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && (posts.length ? 
        <Feed posts={posts}/> : 
        <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}

export default Home