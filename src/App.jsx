import { useEffect, useMemo, useState } from "react";
import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchPicturesWithImage } from "./axios-api";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(photo) {
    if (modalIsOpen) return;
    setModalImage(photo);
    setTimeout(() => {
      setIsOpen(true);
    }, 0);
  }

  function closedModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  const handleSearch = (image) => {
    setLoadMore(image);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (loadMore === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPicturesWithImage(loadMore, page);
        setPictures((prevImage) => [...prevImage, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, loadMore]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && (
        <ImageGallery openModal={openModal} items={pictures} />
      )}
      {isLoading && <Loader />}
      {pictures.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpenModal={modalIsOpen}
        photo={modalImage}
        isCloseModal={closedModal}
      />
      <Toaster position="top" />
    </div>
  );
}

export default App;
