// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  // position: absolute;
  top: 12%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background:#222;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color:#efefef;
  }
`;