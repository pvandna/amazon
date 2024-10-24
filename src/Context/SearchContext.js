// send props search box to prodct.js using contest api;

import React, { createContext, useState } from 'react';

// Create the context
export const SearchContext = createContext();

// Create the provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // For storing suggestions

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, suggestions, setSuggestions }}>
      {children}
    </SearchContext.Provider>
  );
};
