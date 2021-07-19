import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Catlist } from './components/CatList'
import { Questions } from './components/Questions'
import { getCatlist } from './components/api'

const App = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    getCatlist().then((categories) => setCategories(categories))
  }, [])

  return (
    <div className='container'>
      <h1>PopQuiz</h1>
      <h2>Select a Category to Begin</h2>
      {selectedCategory
        ? (<Questions selectedCategory={selectedCategory} />)
        : (<Catlist categories={categories} setSelectedCategory={setSelectedCategory} />)}
    </div>
  )
}

export default App
