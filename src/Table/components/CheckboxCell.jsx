const CheckBoxCell = ({ checked, onClick }) => (
  <span className="table-cell checkbox-cell">
    <input type="checkbox" onClick={onClick} checked={checked} />
  </span>
);

export default CheckBoxCell;
