import React, { useEffect, useState } from 'react'
import { getCategoryQuestions } from '../api'
import { Catlist } from './Catlist'

export const CategoryQuestions = (props) => {
  const [questions, setQuestions] = useState({})
  const [loading, setLoading] = useState(true)

  const { selectedCategory, categories, setSelectedCategory } = props

  useEffect(() => {
    getCategoryQuestions(selectedCategory).then(data => {
      setQuestions(data)
      setLoading(false)
    })
  }, [selectedCategory])

  return loading
    ? <><h1>PopQuiz</h1>
      <p className='loading'>'Hang tight! PopQuiz is gathering questions'</p>
      </>
    : (<>
      <h1 onClick={() => setSelectedCategory(null)}>PopQuiz</h1>
      <h2 className='cat-name'>{questions[0].category}</h2>
      {questions.map((data) => {
        return (
          <>
            <div className='question'>
              <h2>{data.question}</h2>
              {data.incorrect_answers.map((answer) => {
                return (
                  <button className='answer'>{answer}</button>
                )
              })}
              <button className='answer'>{data.correct_answer}</button>
            </div>
          </>
        )
      })}
       </>
      )
}
