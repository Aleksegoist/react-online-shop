import React from 'react';
import '../styles/shop.css';

import { Col, Container, Row } from 'reactstrap';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

import { AiOutlineSearch } from 'react-icons/ai';

const Shop = () => {
  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select>
                  <option>Filter By Category</option>
                  <option value='sneakers'>Sneakers</option>
                  <option value='mobile'>Mobile</option>
                  <option value='shirts'>Shirts</option>
                  <option value='wireless'>Wireless</option>
                  <option value='watch'>Watch</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search__box'>
                <span>
                  <AiOutlineSearch />
                </span>
                <input type='text' placeholder='Search...' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
