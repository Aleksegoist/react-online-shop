import React from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>OnlineStore</h1>
                <p>Since 2000</p>
              </div>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                <li className='nav__item'></li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
