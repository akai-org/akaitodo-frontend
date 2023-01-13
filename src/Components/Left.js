import "../Styles/Left.css";

function Left() {
  return (
    <div className="left">
      <div className="logo-container">
        <div className="logo-image"></div>
        <div className="logo-app-name">DoDo</div>
      </div>
      <div className="menu-container"></div>
      <div className="user-container">
        <div className="user-tile">
          <div className="user-avatar"></div>
          <div className="user-name"></div>
        </div>
      </div>
    </div>
  );
}

export default Left;
