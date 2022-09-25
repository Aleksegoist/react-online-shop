import React, { useEffect, useRef } from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user-icon.png';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

const nav__links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>OnlineStore</h1>
              </div>
            </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav__icons'>
              <span className='fav__icon'>
                <AiOutlineHeart size={24} />
                <span className='badge1'>1</span>
              </span>
              <span className='cart__icon'>
                <HiOutlineShoppingBag size={24} />
                <span className='badge1'>1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt='' />
              </span>
              <div className='mobile__menu'>
                <span onClick={menuToggle}>
                  <AiOutlineMenu size={24} />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
