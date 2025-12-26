import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, fetchImagesSortedById } from "./redux/slices/imagesSlice";
import "./styles.css";
import TopBar from "./components/topbar/topbar";
import ImagesGrid from "./components/imagesGrid/imagesGrid";
import SortOptionsDropdown from "./components/sortOptionsDropdown/sortOptionsDropdown";

function App() {
  const dispatch = useDispatch();
  const { page, category, sortBy } = useSelector((state) => state.images);

  //every time the category, page or the sortBy changes refetch the data
  useEffect(() => {
    switch (sortBy) {
      case "popular":
      case "latest":
        dispatch(fetchImages({ category, page, sortBy }));
        break;
      case "id":
        dispatch(fetchImagesSortedById({ category, page }));
        break;
    }
  }, [category, page, sortBy]);

  return (
    <div className="app">
      <TopBar />
      <SortOptionsDropdown />
      <ImagesGrid />
    </div>
  );
}

export default App;
