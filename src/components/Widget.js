import { useState } from "react";
import "../styles/Widget.scss";

function Widget(props) {
  const [widgetClass, setWidgetClass] = useState("widget-box");
  function onWidgetClick() {
    setWidgetClass((prevState) => prevState + " clicked");
  }
  return (
    <div className={widgetClass} onClick={onWidgetClick}>
      <span>{props.children}</span>
    </div>
  );
}

export default Widget;
