// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3e6c8cf8;
  height: 95vh;
  width:20vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 10vh;
  left: 0;
  z-index:999;
  transition: transform 0.8s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-93vw)' : 'translateX(-122vw)'};

   @media (max-width: ${({ theme }) => theme.mobile}) {
     width: 100%;
   }
  @media screen and (min-width:577px) and (max-width:1400px) {
    width: 50vw;
    height:11 d-flex align-items-centervh;
    transform: ${({ open }) => open ? 'translateX(-92vw)' : 'translateX(-145vw)'};
  }
  @media screen and (max-width:576px) {
    width: 100vw;
    transform: ${({ open }) => open ? 'translateX(-71vw)' : 'translateX(-196vw)'};
  }

  .icone{
    min-width:30px;
    max-width:100px;
  }

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000000;
    text-decoration: none;
    transition: color 1.2s ease-in-out;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #efefef;
      transition: color 1.2s ease-in-out;
    }
  }
`;