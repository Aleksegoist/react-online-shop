import React from 'react';

import '../styles/product-details.css';

import products from '../data/product';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import ProductsList from '../components/ui/ProductsList';

import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { RiStarFill, RiStarHalfFill } from 'react-icons/ri';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');

  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandle = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product added successfully');
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className='pt-10'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>

            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <p className='mt-3'>{shortDesc}</p>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span onClick={() => setRating(1)}>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span onClick={() => setRating(2)}>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span onClick={() => setRating(3)}>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span onClick={() => setRating(4)}>
                      <RiStarFill size={24} style={{ color: 'gold' }} />
                    </span>
                    <span onClick={() => setRating(5)}>
                      <RiStarHalfFill size={24} style={{ color: 'gold' }} />
                    </span>
                  </div>
                  <span>({avgRating} ratings)</span>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <p className='product__price'>${price}</p>
                  <p>Category: {category.toUpperCase()}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='buy__btn'
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className='tab__content mt-5'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className='review__wrapper'>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-4'>
                          <h6>Alex Pretender</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className='review__form'>
                      <h4>Leave your experience</h4>
                      <form action='' onSubmit={submitHandle}>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='Enter your name'
                            ref={reviewUser}
                          />
                        </div>

                        <div className='form__group d-flex align-items-center gap-5'>
                          <span>
                            1
                            <RiStarFill />
                          </span>
                          <span>
                            2
                            <RiStarFill />
                          </span>
                          <span>
                            3
                            <RiStarFill />
                          </span>
                          <span>
                            4
                            <RiStarFill />
                          </span>
                          <span>
                            5
                            <RiStarFill />
                          </span>
                        </div>

                        <div className='form__group'>
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type='text'
                            placeholder='Review message...'
                          />
                        </div>

                        <motion.button
                          type='submit'
                          whileHover={{ scale: 1.1 }}
                          className='buy__btn'
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
