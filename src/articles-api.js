import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchPicturesWithImage = async image => {
    const response = await axios.get(`/search?query=${image}`);
    return response.data.hits;
};