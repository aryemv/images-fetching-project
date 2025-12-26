import "./imagesGrid.css";
import { useSelector } from "react-redux";

function ImagesGrid() {
  const { data, loading } = useSelector((state) => state.images);

  return (
    <div>
      {/* shows loading until the data is fetched, then shows the data */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {/* display the data */}
          {data?.length == 0 || !Array.isArray(data) ? (
            <p>no data to show!</p> //if the server doesnt return an array with elements show that there is no data
          ) : (
            data.map((img) => (
              <div
                key={img.id}
                className="image-box"
                onClick={() =>
                  alert(
                    `id: ${img.id}, Views: ${img.views}, Downloads: ${img.downloads}, Collections: ${img.collections}`
                  )
                }
              >
                <img src={img.previewURL} alt={img.tags} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ImagesGrid;
