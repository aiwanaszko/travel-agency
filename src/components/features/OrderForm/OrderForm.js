import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
//import OrderOption from '../OrderOption/OrderOption';
import {Grid, Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.string,
};

export default OrderForm;
