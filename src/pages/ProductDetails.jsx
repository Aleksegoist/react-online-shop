import React from 'react';

import '../styles/product-details.css';

import products from '../data/product';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { RiStarFill, RiStarHalfFill } from 'react-icons/ri';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  return (
    <Helmet>
      <CommonSection />

      <section className='pt-10'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>

            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <p>{shortDesc}</p>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span>
                      <RiStarHalfFill size={24} style={{ color: 'gold' }} />
                    </span>
                  </div>
                  <span>({avgRating} ratings)</span>
                </div>
                <span>${price}</span>
                <button className='buy__btn'>Add To Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
