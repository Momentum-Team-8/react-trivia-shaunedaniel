
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { getCategoryList } from './api';
import { Catlist } from './components/Catlist';
import { Questions } from './components/Questions';

function App() {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        getCategoryList().then((categories) => setCategories(categories))
    }, [])

    return (
        <>
        {selectedCategory 
            ? <Questions selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory} />
            : (<Catlist selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory} />)
        }
        </>
    )
}

export default App;
