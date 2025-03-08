import { useState } from 'react';
import './App.css';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBt';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  

  return (
    <div>
      <LoadMoreBtn/>
      <SearchBar/>
      <ImageGallery/>
      <Loader/>
      <ErrorMessage/>
      <ImageModal/>
    </div>
  )
}

export default App
