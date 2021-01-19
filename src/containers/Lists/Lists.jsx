import React from 'react';
import { Col, Row } from 'antd';
import List from '../../components/List/List';

const Lists = () => {
  return (
    <>
    <Row justify="center">
      <List />
    </Row>
    <Row justify="center">
      <List />
    </Row>
    <Row justify="center">
      <List />
    </Row>
    <Row justify="center">
      <List />
    </Row>
    </>
  );
};

export default Lists;