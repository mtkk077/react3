import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import img1 from './assets/cartProducts/img1.jpeg'
import img2 from './assets/cartProducts/img2.jpeg'
import img3 from './assets/cartProducts/img3.jpeg'
import img4 from './assets/cartProducts/img4.jpeg'
const data = [
  {
    image: img1,
    title: 'platye do kolena CEline',
    price: '43 050'
  },
  {
    image: img2,
    title: 'platye do kolena GUCCI',
    price: '55 050'
  },
  {
    image: img3,
    title: 'platye do kolena ZARA',
    price: '13 440'
  },
  {
    image: img4,
    title: 'platye do kolena LV',
    price: '99 999'
  }
]

function App() {
  return (
    <div className="App">
      {
        data.map(item => (
          <Cart
          image={item.image}
          title={item.title}
          price={item.price}
          />
        ))
      }
    </div>
  );
}

export default App;