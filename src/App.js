import './App.css';
import {useEffect , useState} from 'react';
import Movie from './movie';
import Filter from './filter';
import { motion, AnimatePresence} from 'framer-motion';

function App() {
  //holds all the original
  const [popular, setpopular] = useState([]);
  //duplicate
  const [filtered,setFiltered] = useState([]);
  //active genre
  const [activeGenre,setActivegenre] = useState(0)


  useEffect(()=>{
    fetchpopular();

  },[]);

  const fetchpopular = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=476e2dbde700c916f84cbe0aa2c9c760")
    const movies = await data.json(); 
    console.log(movies.results)
    setpopular(movies.results);
    setFiltered(movies.results);
    
  }
  return (
    <div className="App">
      
        <Filter popular = {popular} setFiltered = {setFiltered} activeGenre={activeGenre} setActivegenre={setActivegenre} />
        <motion.div layout className="popular-movies">  
        <AnimatePresence>
          {filtered.map(movie=>{
            return <Movie key={movie.id} movie={movie} />
          })}
          </AnimatePresence>
        </motion.div>
      
      
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=476e2dbde700c916f84cbe0aa2c9c760&language=en-US
