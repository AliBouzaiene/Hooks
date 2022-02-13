import './App.css';
import React, { useState, useEffect } from 'react';
import { Data } from './components/Data';
import Profile from './components/Profil';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import Search from './components/Filtre';
function App() {
  const [movies, setMovies] = useState(Data)
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)


  const handleRate = (x) => {
    setRate(x)
  }

  const handleName = (e) => {   
    setName(e.target.value)
  }
  const add = (newMovie) => {
    setMovies([...movies, newMovie]) 
  }
  return (
    <div className="App">
        <div>
        <Search handleName={handleName} />
         <MoviesList movies={movies} name={name} rate={rate} />
         <AddMovie add={add} />
        </div>
    </div>
  );
}

export default App;
