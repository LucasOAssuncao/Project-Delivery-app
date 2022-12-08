import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/Nav';
import ProductCard from '../../components/ProductCard';
import ButtonToCart from '../../components/ButtonToCart';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    const init = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    };
    init();
  }, []);

  const addProduct = ({ id, name, price, urlImage, quantity }) => {
    const indexItem = cartItems.findIndex((item) => item.id === id);
    if (indexItem >= 0) {
      cartItems[indexItem].quantity += 1;
      localStorage.setItem('cart', JSON.stringify([...cartItems]));
      setCartItems([...cartItems]);
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([...cartItems, { id, name, price, urlImage, quantity }]),
      );
      setCartItems([...cartItems, { id, name, price, urlImage, quantity }]);
    }
  };

  const removeProduct = (id) => {
    const indexItem = cartItems.findIndex((item) => item.id === id);
    if (indexItem >= 0 && cartItems[indexItem].quantity > 1) {
      cartItems[indexItem].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify([...cartItems]));
      return setCartItems([...cartItems]);
    }
    if (indexItem >= 0) {
      cartItems.splice(indexItem, 1);
      localStorage.setItem('cart', JSON.stringify([...cartItems]));
      return setCartItems([...cartItems]);
    }
  };

  const setItem = ({ id, name, price, urlImage, quantity }) => {
    const indexItem = cartItems.findIndex((item) => item.id === id);
    if (indexItem >= 0 && quantity > 0) {
      cartItems[indexItem].quantity = quantity;
      localStorage.setItem('cart', JSON.stringify([...cartItems]));
      return setCartItems([...cartItems]);
    }
    if (indexItem >= 0 && quantity <= 0) {
      cartItems.splice(indexItem, 1);
      localStorage.setItem('cart', JSON.stringify([...cartItems]));
      return setCartItems([...cartItems]);
    }
    localStorage.setItem('cart', JSON.stringify([...cartItems,
      { id, name, price, urlImage, quantity }]));
    return setCartItems([...cartItems, { id, name, price, urlImage, quantity }]);
  };

  return (
    <div>
      <NavBar />
      <div className="containerCards">
        {
          products.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              price={ product.price }
              img={ product.urlImage }
              name={ product.name }
              addItem={ addProduct }
              removeItem={ removeProduct }
              setItem={ setItem }
              qtd={ cartItems.find((item) => item.id === product.id)?.quantity }
            />
          ))
        }
      </div>
      <ButtonToCart
        total={ cartItems.reduce((acc, i) => i.price * i.quantity + acc, 0) }
      />
    </div>
  );
}

export default CustomerProducts;
