import React from 'react';

import CalendarWidgetAddon from './CalendarWidgetAddon';
import styles from '../../styles/components/widgets/CalendarWidget.module.scss';

const CalendarWidget = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.date}>
                    <span className={styles.dateSpan}>
                        {' '}
                        Monday, 12th January 2022
                    </span>
                </div>

                <div className={styles.specifiers}>
                    <CalendarWidgetAddon id="1">Day</CalendarWidgetAddon>
                    <CalendarWidgetAddon id="2">Month</CalendarWidgetAddon>
                    <CalendarWidgetAddon id="3">Year</CalendarWidgetAddon>
                </div>
                <div className={styles.block}>infs</div>
            </div>
        </>
    );
};

export default CalendarWidget;
