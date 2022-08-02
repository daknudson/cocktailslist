import React from 'react'
import { useGlobalContext } from '../context'
import { useRef } from 'react'
import { useEffect } from 'react';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
