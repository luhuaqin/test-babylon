import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import BackIcon from '../../assets/iconFont/back.svg';

const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.backHomePage} onClick={() => navigate('/home')}>
      <img src={BackIcon} alt="" />
      <span>返回首页</span>
    </div>
  );
};

export default BackToHome;