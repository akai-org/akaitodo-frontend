import React, { useState } from 'react';

import styles from '#src/styles/components/widgets/CalendarWidget.module.scss';

const CalendarWidgetAddon = ({ children }) => {
    //TODO - MOVE THAT FUNCTIONALITY TO CALLENDAR TO MAKE JUST ONE ACTIVE ONE TIME
    //NOT WORKING AFTER MODULES, TO FIX IN THE FUTURE
    const [widgetClass, setWidgetClass] = useState('widget-box');

    function onWidgetClick() {
        if (widgetClass.includes('clicked')) setWidgetClass('widget-box');
        else setWidgetClass('widget-box clicked');
    }

    return (
        <div className={styles.widgetBox} onClick={onWidgetClick}>
            <span>{children}</span>
        </div>
    );
};

export default CalendarWidgetAddon;
