import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ListItems from './ListItems'
import {foods, filterItems } from '../assets/data.js'

const FilterableList = () => {
 
   const [query,setQuery] = useState('');
   const results = filterItems(foods,query);
   function handleChange(e){
     setQuery(e.target.value);
   }
 
  return (
    <div>
      <SearchBar 
      query={query} 
      onChange={handleChange}/>
      <hr />
      <ListItems items={results}/>
    </div>
  )
}

export default FilterableList
