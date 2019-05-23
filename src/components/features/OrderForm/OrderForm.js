import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
  </Row>
);

export default OrderForm;
