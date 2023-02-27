import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import AllProductss from "./pages/AllProducts";
import AllUsers from "./pages/AllUsers";
import LoginAdmin from "./pages/LoginAdmin";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginAdmin />} />
                <Route path="/users" element={<AllUsers />} />
                <Route path="/products" element={<AllProductss/>} />
                <Route path="/add" element={<AddProduct/>} />
                <Route path="/update/:id" element={<Update/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
