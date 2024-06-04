import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames, newGames, upcomingGames } from "./reducers/gamesReducers";






function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  useEffect(() => {
    dispatch(upcomingGames())
  }, [dispatch])

  useEffect(() => {
    dispatch(newGames())
  }, [dispatch])


  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
