import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{height: '100%'}}
    >
      <Col span={6}>
        <Form
          name="login"
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
};

export default Login;


