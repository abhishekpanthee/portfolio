import React from 'react';
import styles from './star.module.scss';

const ShootingStar: React.FC = () => {
  return (
    <div className="absolute left-40 top-20 z-30">
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
};

export default ShootingStar;
