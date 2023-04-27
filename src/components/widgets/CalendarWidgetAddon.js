import { useState } from "react";
import styles from "../../styles/components/widgets/CalendarWidget.module.scss";

function CalendarWidgetAddon(props) {
  //TODO - MOVE THAT FUNCTIONALITY TO CALLENDAR TO MAKE JUST ONE ACTIVE ONE TIME
  //NOT WORKING AFTER MODULES, TO FIX IN THE FUTURE
  const [widgetClass, setWidgetClass] = useState("widget-box");

  function onWidgetClick() {
    if (widgetClass.includes("clicked")) setWidgetClass("widget-box");
    else setWidgetClass("widget-box clicked");
  }

  return (
    <div className={styles.widgetBox} onClick={onWidgetClick}>
      <span>{props.children}</span>
    </div>
  );
}

export default CalendarWidgetAddon;
