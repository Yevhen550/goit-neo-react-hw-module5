import axios from "axios";
const API_KEY = "rfCwbckgtQUDD3T8K91eUHDr_Jp80VlSu_SODn54lno";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchPhotoCard = async (query, page = 1) => {
  const params = {
    query: query.trim(),
    page,
    per_page: 15,
    client_id: API_KEY,
  };

  const { data } = await axios.get("/", { params });

  return data;
};
export default fetchPhotoCard;
