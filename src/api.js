// require("dotenv").config();

// Base URL
const base_url = 'https://api.rawg.io/api/';


// Getting The Date

const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

const currentMonth = getDate().slice(5, 7);
const currentDay = getDate().slice(8, 10);
const currentDate = `${getDate().slice(0, 4)}-${currentMonth}-${currentDay}`;
const lastYear = `${getDate().slice(0, 4) - 1}-${currentMonth}-${currentDay}`;

const today = new Date();
const nextYear = `${today.getFullYear() + 1}-${currentMonth}-${currentDay}`;



// Popular_Games
const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
// upcoming Games
const upcoming_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
// newGames
const newGames = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;


export const popularGamesURL = () => `${base_url}${popular_games}` ;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}` ;
export const newGamesURL = () => `${base_url}${newGames}` ;

//Game Details

export const GameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_IGNITE_API}`;
export const gameScreenURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_IGNITE_API}`;

//Game Search
export const gameSearchURL = (game_name) => `${base_url}games?search=${game_name}`;

