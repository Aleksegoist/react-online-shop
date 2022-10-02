import React from 'react';
import '../styles/shop.css';

import { Col, Container, Row } from 'reactstrap';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import ProductsList from '../components/ui/ProductsList';

import products from '../data/product';

import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'trainers') {
      const filteredProducts = products.filter(
        (item) => item.category === 'trainers'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(
        (item) => item.category === 'mobile'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'shirts') {
      const filteredProducts = products.filter(
        (item) => item.category === 'shirts'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(
        (item) => item.category === 'wireless'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='trainers'>Trainers</option>
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
                <input
                  type='text'
                  placeholder='Search...'
                  onChange={handleSearch}
                />
                <span>
                  <AiOutlineSearch size={24} />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
