import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import heroImg from '../assets/hero_img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/ui/ProductsList';
import products from '../data/product';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'trainers'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'shirts'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>Trending product in {year}</p>
                <h2>Make Your Style More Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  necessitatibus minima fugiat quia fuga voluptatibus, eos
                  inventore soluta dolorem quod.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
