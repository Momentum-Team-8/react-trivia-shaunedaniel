import React from 'react'

export const Catlist = (props) => {
    const { categories, setSelectedCategory, selectedCategory } = props
    return (
            
        <>
        <h1>PopQuiz</h1>
        <div className="category-list">
            {categories.map(category => {
                return (
                        <div className="category" key={category.id}>
                            <p>{category.name}</p>
                            <button className='button' onClick={() => setSelectedCategory(category.id)}>select</button>
                        </div>
                )
            })}
        </div>
        </>
    )
}