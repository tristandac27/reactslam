import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  function addToCart(product) {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index !== -1) {
      const newCart = [...cart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  const filteredProducts = products.filter(product => {
    const name = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    return name.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
  });

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-black shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Shop</h1>
        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            <FaShoppingCart className="inline-block mr-2" />
            Voir le panier
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {cart.reduce((acc, product) => acc + product.quantity, 0)}
              </span>
            )}
          </button>
          {showCart && (
            <div className="absolute top-0 right-0 bg-white border rounded shadow-lg mt-12 w-80">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Panier</h2>
                {cart.length === 0 && <p className="text-gray-700">Votre panier est vide.</p>}
                {cart.length > 0 && (
                  <ul className="divide-y divide-gray-300 overflow-y-auto max-h-60">
                    {cart.map(product => (
                      <li key={product.id} className="flex justify-between items-center py-2">
                        <img src={product.image} alt={product.title} className="w-12 h-12 object-contain" />
                        <div>
                          <span className="text-gray-700">{product.title}</span>
                          {product.quantity > 1 && <span className="text-gray-500 ml-2">x{product.quantity}</span>}
                        </div>
                        <button
                          onClick={() => removeFromCart(product)}
                          className="bg-transparent text-red-500 font-bold py-1 px-2 rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {cart.length > 0 && (
                  <p className="text-2xl font-bold text-gray-800 py-4">Total: ${total}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white shadow p-4 text-center h-full">
              <img src={product.image} alt={product.title} className="mx-auto mb-4 max-w-full h-48 object-contain" />
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold mb-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-auto"
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;