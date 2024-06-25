import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadGames, newGames, upcomingGames } from '../reducers/gamesReducers';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Game } from '../components/Game';
// import { GameDetail } from '../components/GameDetail';
import { Outlet } from 'react-router-dom';
// import { loadGames} from "../pages/gamesReducers";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // Runs only once on component mount
  
  useEffect(() => {
    dispatch(upcomingGames());
  }, [dispatch]); // Runs only once on component mount (adjust if needed)
  
  useEffect(() => {
    dispatch(newGames());
  }, [dispatch]); // Runs only once on component mount (adjust if needed)
  
  const games = useSelector((state) => state.games)

  return (
    <GameList>
      <Outlet/>
      <h2>upcoming Games</h2>
      <Games>
          {games.upcoming.map((game) => {
            return <Game key={game.id} id={game.id} name={game.name} released={game.released} image={game.background_image}/>
          })}
      </Games>
      <h2>Popular Games</h2>
      <Games>
          {games.popular.map((game) => {
            return <Game key={game.id} id={game.id} name={game.name} released={game.released} image={game.background_image}/>
          })}
      </Games>
      <h2>New Games</h2>
      <Games>
          {games.newGames.map((game) => {
            return <Game key={game.id} id={game.id} name={game.name} released={game.released} image={game.background_image}/>
          })}
      </Games>
    </GameList>
  )
}


const GameList = styled(motion.div)`
  padding:0rem 5rem;
  h2 {
    padding:3rem 0rem 3rem;
  }

`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;

`;

export default Home;



