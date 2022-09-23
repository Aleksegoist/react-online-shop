import React from 'react';
import productImg from '../../assets/shoes01.jpg';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';

const ProductCard = () => {
  return (
    <Col lg='3' md='4 '>
      <div className='product__item'>
        <div className='product__img'>
          <img src={productImg} alt='' />
        </div>
        <div className='p-2 product__info'>
          <h3 className='product__name'>Modern Sneakers</h3>
          <span>Sneakers</span>
        </div>
        <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
          <span className='price'>$130</span>
          <span>
            <AiOutlinePlus
              style={{
                fontSize: '1.8rem',
                padding: '5px',
                background: 'var(--primary-color)',
                color: '#fff',
                borderRadius: '50px',
              }}
            />
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
