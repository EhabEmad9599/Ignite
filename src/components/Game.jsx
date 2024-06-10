import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadDetails } from '../reducers/detailReducer';
// styling and animate
// import styled from 'styled-components';

export const Game = ({ id, name, released, image}) => {
  // Load Details
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetails(id))
  }
  return (
    <StyledGame onClick={() => loadDetailsHandler()}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 280px;
    // object-fit: cover;
    background-size:cover;
  }
`;