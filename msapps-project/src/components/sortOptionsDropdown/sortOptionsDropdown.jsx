import { useDispatch, useSelector } from "react-redux";
import "./sortOptionsDropdown.css";
import { setSortBy } from "../../redux/slices/imagesSlice";

function SortOptionsDropdown() {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.images);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSortBy(value));
  };

  return (
    <div className="sort">
      <h6 className="text">sort by:</h6>
      <select value={sortBy} onChange={handleChange}>
        <option value="popular">popularity</option>
        <option value="latest">date</option>
        <option value="id">id</option>
      </select>
    </div>
  );
}

export default SortOptionsDropdown;
