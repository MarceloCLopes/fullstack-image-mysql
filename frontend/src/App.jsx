import { Route, Routes } from "react-router-dom";
import { ProductAdd } from "./components/ProductAdd";
import { ProductEdit } from "./components/ProductEdit";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<ProductAdd />} />
        <Route path="edit/:id" element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;
