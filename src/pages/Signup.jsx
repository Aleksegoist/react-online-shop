import React from 'react';
import '../styles/login.css';

import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

import Helmet from '../components/helmet/Helmet';
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <button type='submit' className='buy__btn login__btn'>
                  Create an Account
                </button>
                <p>
                  Already have an account?
                  <Link to='/login'>Enter your login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
