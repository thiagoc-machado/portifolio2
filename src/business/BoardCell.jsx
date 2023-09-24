import "./BoardCell.css";
import ""
console.log("boardCell.jsx()business");
const BoardCell = ({ cell }) => (
  <div className={`BoardCell ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;
