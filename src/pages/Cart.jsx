import React from 'react';
import '../styles/cart.css';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

import { Col, Container, Row } from 'reactstrap';

import { GoTrashcan } from 'react-icons/go';

import { motion } from 'framer-motion';

import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No item added to the cart</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt='' />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity} pcs</td>
      <td>
        <motion.span whileHover={{ scale: 1.2 }}>
          <GoTrashcan size={24} style={{ cursor: 'pointer' }} />
        </motion.span>
      </td>
    </tr>
  );
};

export default Cart;
