import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/HomePage/Home";
import NotFound from "./components/HomePage/NotFound";
import ProductDetail from "./components/ItemDetails/ProductDetail";
import { Box } from "@material-ui/core";
import TemplateProvider from "./templates/TemplateProvider";

function App() {
  return (
    
    <TemplateProvider>
      <Navbar />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route component={NotFound} />
        </Routes>
      </Box>
      <Footer />
    </TemplateProvider>
  );
}

export default App;
