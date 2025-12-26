import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  setCategory,
} from "../../redux/slices/imagesSlice";

function TopBar() {
  const dispatch = useDispatch();
  const { page, data } = useSelector((state) => state.images);

  //handle the category selection event
  const handleChangeCategory = () => {
    const choice = prompt("Choose category: "); //gets category from user

    if (choice === null) {
      //checks if the user clicked cancel, if yes do nothing
      return;
    }

    //checks if the user entered invalid input (empty strings or only space strings), if yes shows a warning
    if (choice.trim() === "") {
      alert("please enter valid category");
      return;
    }

    dispatch(setCategory(choice)); //change the category
  };

  return (
    <div className="top-bar">
      <button disabled={page == 1} onClick={() => dispatch(prevPage())}>
        Prev
      </button>
      <button onClick={handleChangeCategory}>Category</button>
      <button disabled={data?.length < 9} onClick={() => dispatch(nextPage())}>
        Next
      </button>
    </div>
  );
}

export default TopBar;
