import React from 'react';
import styles from './star.module.scss';


const ShiningStar: React.FC = () => {
  return (
    <div className="fixed right-0 top-64 w-screen h-screen"> {/* Added full screen size to ensure stars are within bounds */}
      <div className={styles.night}>
        <div className={styles['single-star']}></div>
        <div className={styles['single-star']}></div>
        <div className={styles['single-star']}></div>
        <div className={styles['single-star']}></div>
        <div className={styles['single-star']}></div>
      </div>
    </div>
  );
};

export default ShiningStar;
