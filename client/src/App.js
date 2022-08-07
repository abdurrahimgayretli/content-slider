import "./App.sass";
import ContentSlider from "./components/Content";
import { GalleryContextProvider } from "./context/GalleryContext";

function App() {
  return (
    <div>
      <GalleryContextProvider>
        <ContentSlider />
      </GalleryContextProvider>
    </div>
  );
}

export default App;
