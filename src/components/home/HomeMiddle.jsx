import React from 'react';
import '../../styles/App.scss';

import CalendarWidget from '../widgets/CalendarWidget';
import styles from '../../styles/components/home/HomeMiddle.module.scss';

const HomeMiddle = () => {
    /*
  return (
    <div className="middle">
      <CalendarWidget />
    </div>
  );
  */
    return <div className={styles.container}></div>;
};

export default HomeMiddle;
