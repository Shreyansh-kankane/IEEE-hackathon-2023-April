import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import LoginButton from  "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";
 
const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Wrapper>
      <div className='navbar'>
        <div className='nav-items'><NavLink to="/">Home</NavLink></div>
        <div className='nav-items'><NavLink to="/about"> About Us</NavLink></div>
        <div className='nav-items'><NavLink to="/services"> Services</NavLink></div>
        <div className='nav-items'><NavLink to="/contact"> Contact Us</NavLink></div> 
        {isAuthenticated ? 
        <div className='nav-items'><LogoutButton></LogoutButton></div> 
        : <div className='nav-items'> <Wrapper ><LoginButton ></LoginButton></Wrapper> </div> }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  .navbar{
    display: flex;
    width: 50%;
    justify-content: space-around;
  }
  .nav-items{
    height: 4rem;
    display: flex;
    align-items: center;
    width: max-content;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: flex-start;
    .navbar{
      width: 100%;
    }
  }

`

export default Navbar
