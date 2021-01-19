import React from 'react';
import { Button, PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={ styles.container }>
      <PageHeader
        className={ styles.w }
        title={
          <NavLink
            to=""
          >
            CheckBook
          </NavLink>
        }
        extra={[
          <NavLink
            key={1}
            to="/login">
            <Button type="primary">
              Вход
            </Button>
          </NavLink>,
          <NavLink
            key={0}
            to="/reg">
            <Button type="primary">
              Регистрация
            </Button>
          </NavLink>,
        ]}
      >
      </PageHeader>
    </div>
  )
};

export default Header;