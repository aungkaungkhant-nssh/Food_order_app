import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CartContextProvider from './store/CartContextProvider'
function App() {
  const [isModal,setIsModal]=useState(false);
  const hideShow=()=>{
    setIsModal(!isModal);
  }
  return (
    <CartContextProvider>
        {isModal && <Cart onHideShow={hideShow}/>}
        <Header onHideShow={hideShow}/>
        <main>
            <Meals />
        </main>
    </CartContextProvider>
  );
}

export default App;
