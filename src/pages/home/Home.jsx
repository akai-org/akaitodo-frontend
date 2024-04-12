import React from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/Home.module.scss';

import DatePickerWidget from '#src/components/widgets/DatePickerWidget';

const Home = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div> < DatePickerWidget /> </div>
            {/* <button onClick={handleLogout}> LOGOUT </button> */}
        </div>
    );
};

export default Home;
