import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import DetailProduk from "./components/Produk/DetailProduk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produk/:slug" element={<DetailProduk />} />
    </Routes>
  );
}

export default App;
