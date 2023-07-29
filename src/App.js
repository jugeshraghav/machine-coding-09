import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Categories } from "./pages/Categories";
import { CategoryList } from "./pages/CategoryList";
import { Explore } from "./pages/Explore";
import { VideoDetail } from "./pages/VideoDetail";
import { WatchLater } from "./pages/WatchLater";
import { Playlist } from "./pages/Playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:categoryName" element={<CategoryList />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
