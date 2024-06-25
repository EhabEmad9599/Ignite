import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//Images
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//Stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";


export const GameDetail = () => {

  const {games} = useSelector((state) => state.detail);
  const {isLoading} = useSelector((state) => state.detail)

  const navigate  = useNavigate()

        //GET PLATFORM IMAGES
        const getPlatform = (platform) => {
          switch (platform) {
            case "PlayStation 4":
              return playstation;
            case "Xbox One":
              return xbox;
            case "PC":
              return steam;
            case "Nintendo Switch":
              return nintendo;
            case "iOS":
              return apple;
            default:
              return gamepad;
          }
        };

        const getStars = () => {
          const stars = [];
          const rating = Math.floor(games.details.rating);
          for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
              stars.push(<img alt="star" key={i} src={starFull}></img>);
            } else {
              stars.push(<img alt="star" key={i} src={starEmpty}></img>);
            }
          }
          return stars;
        };

  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate('/');
      console.log(element);
    }

  };
  return (
    <>
    {!isLoading && (

    <CardShadow className='shadow' onClick={exitDetailHandler}>
      <Detail>
        <Stats>
          <section className="rating">
            <h3>{games.details.name}</h3>
            <p>Rating: {games.details.rating}</p>
            {getStars()}
          </section>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {games.details.platforms.map((data) => 
                <img src={getPlatform(data.platform.name)} alt={data.platform.name} key={data.platform.id}></img>
              )}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={games.details.background_image} alt={games.details.name} />
        </Media>
        <Description>
          <p>{games.details.description_raw}</p>
        </Description>
        <section className="gallary">
          {games.screen.results.map((screen) => 
            <img style={{marginTop:'.5rem'}} key={screen.id} src={screen.image} alt='game' />
          )}
        </section>
      </Detail>
    </CardShadow>
    )}
    </>
  )
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.2rem;
    height: 1.2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 2rem 0rem;
`;