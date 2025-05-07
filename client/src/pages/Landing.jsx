import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';



/*import styled from 'styled-components';


const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: darkred;
  }
`;*/


const Landing = () => {
  return (
    <Wrapper>
      <nav>

        <Logo />
        
      </nav>

      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking</span> App</h1>
          <p>I am wayfarers hoodie next lavel taiyaki broklyn cliche blue bottle. Single-origin coffee ennui vaporware, artisan pop-up. Tofu biodiesel hexagon neutra air plant cold-pressed tacos.</p> 
          <button className='btn btn-hero'>Login/Register</button>
        </div>
      
        <Link to={'/register'} className='btn btn-hero'>Register</Link>
        <Link to={'/login'} className='btn btn-hero'>Login / Demo User</Link>
        </div>
    </Wrapper>
    
  );
}

export default Landing