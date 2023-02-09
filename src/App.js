import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
 