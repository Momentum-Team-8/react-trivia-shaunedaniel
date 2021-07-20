import React, { useState, useEffect } from 'react'
import './App.css'
import { getCategoryList } from './components/api'
import { CategoryList } from './components/CategoryList'
import { CategoryQuestions } from './components/CategoryQuestions'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    getCategoryList().then((categories) => setCategories(categories))
  }, [])

  return (
    <>
      {selectedCategory
        ? <CategoryQuestions selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        : (<CategoryList selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory} />)}
    </>
  )
}

export default App
