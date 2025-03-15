import axios from "axios";

const API_KEY = "KRMel6EKeDBB3BQBTIgofScd4d05CPPoZMIlKwazPAE";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPicturesWithImage = async (image, page = 1) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: image,
        page,
        orientation: "portrait",
        per_page: 15,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
