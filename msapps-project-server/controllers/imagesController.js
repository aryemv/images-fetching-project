const PIXABAY_API_KEY = "25540812-faf2b76d586c1787d2dd02736";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (
  category = "sport",
  page = 1,
  per_page = 9,
  sort = "popular"
) => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=${per_page}&order=${sort}`
    );
    const data = await response.json();

    //send the "hits" part as a response
    return data.hits;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchImagesSortedById = async (
  category = "sport",
  page = 1,
  per_page = 9
) => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=${per_page}`
    );
    const data = await response.json();

    //send the "hits" part as a response, sorted ascending by id
    return data.hits.sort((a, b) => a.id - b.id);
  } catch (err) {
    throw new Error(err);
  }
};
