import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBt";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
// import { fetchArticlesWithTopic } from "./articles-api";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (image) => {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      const data = await fetchPicturesWithImage(image);
      setPictures(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      <ImageModal />
      <LoadMoreBtn />
    </div>
  );
}

export default App;
