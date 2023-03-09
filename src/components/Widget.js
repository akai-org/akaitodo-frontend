import { useState } from "react";
import "../styles/Widget.scss";

function Widget(props) {
  //TODO - MOVE THAT FUNCTIONALITY TO CALLENDAR TO MAKE JUST ONE ACTIVE ONE TIME
  const [widgetClass, setWidgetClass] = useState("widget-box");

  function onWidgetClick() {
    if (widgetClass.includes("clicked")) setWidgetClass("widget-box");
    else setWidgetClass("widget-box clicked");
  }

  return (
    <div className={widgetClass} onClick={onWidgetClick}>
      <span>{props.children}</span>
    </div>
  );
}

export default Widget;
