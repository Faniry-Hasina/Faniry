import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../src/Components/navbar/navbar";
import Dashboard from "../src/Dashboard";
import ProductList from "../src/Components/navbar/Productlist";
import Clients from "../src/Components/navbar/client/client";
import Store from "./Components/navbar/Store/Store";
import "./App.css";
import Login from "./login";
import "./i18n"



const App: React.FC = () => {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <div className="container">
      {pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};
export default App;
