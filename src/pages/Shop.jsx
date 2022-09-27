import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';

const Shop = () => {
  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />
      <section>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
