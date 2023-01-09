import "../Styles/Left.css";

function Left() {
  return (
    <div className="left">
      <div className="logo">
        <div className="logo-image"></div>
        <div className="app-name">DoDo</div>
      </div>
      <div className="tasks"></div>
      <div className="user--info">
        <div className="user-container">
          <div className="user-avatar"></div>
          <div className="user-name"></div>
        </div>
      </div>
    </div>
  );
}

export default Left;
