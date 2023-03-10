import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marca/:idBrand" element={<ItemListContainer />} />

          <Route
            path="/categoria/:idCategory"
            element={<ItemListContainer />}
          />
          <Route path="/search" element={<ItemListContainer />} />
        </Routes>
        <Footer />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
