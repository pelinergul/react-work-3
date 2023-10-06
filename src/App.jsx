import './App.css'
import { SearchHeader } from './components/SearchHeader'
import { searchImages } from './components/Api';
import { useState } from 'react';
import { ImageList } from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const HandleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className='App'>
      <SearchHeader search={HandleSubmit}/>
      <ImageList imagesPlaceholder={images}/>
    </div>
  )
}

export default App
