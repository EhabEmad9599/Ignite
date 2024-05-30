require("dotenv").config();

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
const nextYear = `${getDate().slice(0, 4) + 1}-${currentMonth}-${currentDay}`;


// Popular_Games
const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;


const popularGamesURL = () => `${base_url}${popular_games}` ;



console.log(popularGamesURL());