// send props search box to prodct.js using contest api;

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';




// Create the context
export const SearchContext = createContext();

// Create the provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // For storing suggestions
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [removeItems, setremoveItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount((prevCount) => prevCount + 1); // Update cart count
    toast("Item Added Sucessfully!");



  };
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setCartCount((prevCount) => prevCount - 1); // Update cart count
   
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0); // Reset the cart count
   
   
  };


  return (
    <SearchContext.Provider value={{
      removeItems,
      removeFromCart,
      searchQuery,
      setSearchQuery,
      suggestions,
      setSuggestions,
      cartItems,
      addToCart,
      cartCount,
      setCartCount,
      clearCart
    }}>


      {children}
    </SearchContext.Provider>
  );
};
