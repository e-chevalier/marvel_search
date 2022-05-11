import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import ItemListContainer from "./components/ItemComponent/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavigationBarComponent/NavigationBar";
import CartContextProvider from "./context/CartContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/characters" element={<ItemListContainer />} />
            <Route path="*" element={<Navigate replace to="/characters" />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
