import Navbar from "./layout/navbar";
import Home from "./pages/home";
import Product from "./pages/products";

function App() {
  return (
    <>
      <div className=" container mx-auto ">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
