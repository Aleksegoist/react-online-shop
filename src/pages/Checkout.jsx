import React from 'react';
import '../styles/checkout.css';

import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Checkout'>
      <CommonSection title='CheckOut' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Info</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='number' placeholder='Phone number' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Street address' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal code' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>${totalAmount}</span>
                </h6>
                <h4>
                  Total Cost: <span>$120</span>
                </h4>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buy__btn auth__btn w-100'
                >
                  Place an order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
