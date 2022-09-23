import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './services.css';
import serviceData from '../data/serviceData';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='services'>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg='3' md='4' key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='service__item'
                style={{ background: `${item.bg}` }}
              >
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
