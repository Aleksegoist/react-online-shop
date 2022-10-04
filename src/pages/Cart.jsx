import React from 'react';
import '../styles/cart.css';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

import { Col, Container, Row } from 'reactstrap';

import { GoTrashcan } from 'react-icons/go';

import { motion } from 'framer-motion';

import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

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

            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='buy__btn w-100 cart__btn '
                >
                  <Link to='/checkout'>Checkout</Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='buy__btn w-100 cart__btn mt-3'
                >
                  <Link to='/shop'>Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt='' />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity} pcs</td>
      <td whileHover={{ scale: 1.1 }}>
        <GoTrashcan
          className='trash'
          size={24}
          style={{ cursor: 'pointer' }}
          onClick={deleteProduct}
        />
      </td>
    </tr>
  );
};

export default Cart;
