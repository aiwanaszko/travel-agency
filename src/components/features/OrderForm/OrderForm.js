import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import {Grid, Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing';

const OrderForm = props => (
  <Row>
    {pricing.map(pricingData => (
      <Col md={4} key={pricingData.id}>
      <OrderOption currentValue={props.options[pricingData.id]} setOrderOption={props.setOrderOption} {...pricingData} />
      </Col>
    ))}
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
