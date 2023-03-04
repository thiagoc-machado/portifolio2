import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button href="#tetris" className="Button" onClick={onClick}>
      Play Tetris
    </button>
  </div>
);

export default Menu;
