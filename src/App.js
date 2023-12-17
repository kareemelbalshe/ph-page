import './App.css';
import AppNavbar from './components/AppNavbar';
import { Route, Routes } from 'react-router-dom'; 
import Products from './components/Products';
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}
//perfect-carriage.surge.sh
export default App;
// "homepage": "https://kareemelbalshe.github.io/ph-page",
//   "name": "cartapp",

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"

// npm run deploy
// serve