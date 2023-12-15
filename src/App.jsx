import './App.css';
import GallaryFooter from './components/GallaryFooter';
import {Header} from './components/Header';
import { imageData } from './components/ImageData';
import { Body } from './components/Body';

function App() {
  return (
    <div>
      <Header/>
      <Body props={imageData} />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
