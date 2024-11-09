import React, { useState } from 'react'
import { SearchContext } from './searchContext';

export const SearchProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState("random");

  const updateQuery = (query) => {
    setSearchQuery(query)
  }

  return (
    <SearchContext.Provider value = {{ searchQuery, updateQuery}}>
      {children}
    </SearchContext.Provider>
  )
}
